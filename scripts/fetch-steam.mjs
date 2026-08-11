#!/usr/bin/env node
/**
 * Builds src/data/steam-stats.json from Steam's public storefront API.
 *
 * The storefront endpoints send no CORS headers, so the browser can never call
 * them directly. Instead this runs in CI on a schedule and commits a snapshot
 * that the site loads as a static asset. No API key is required.
 *
 * Usage:
 *   node scripts/fetch-steam.mjs
 *   node scripts/fetch-steam.mjs --limit=5        # first 5 apps, for a smoke test
 *   node scripts/fetch-steam.mjs --only=673610    # a single app
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const GAMES_DIR = join(ROOT, "src", "data", "games");
const OUT_FILE = join(ROOT, "src", "data", "steam-stats.json");

const USER_AGENT =
  "the-tycoon-list/1.0 (+https://github.com/loststargames/the-tycoon-list)";
// Steam tolerates roughly 200 requests / 5 min per IP. We make two per app, so
// ~1.2s of spacing keeps us comfortably under the limit.
const DELAY_MS = Number(process.env.STEAM_DELAY_MS ?? 1200);
const MAX_RETRIES = 4;
// A handful of dead store pages is normal; a wholesale failure is not.
const FAILURE_THRESHOLD = 0.2;
// Flush partway through so a crash or CI timeout doesn't discard the whole run.
const FLUSH_EVERY = 20;

const args = process.argv.slice(2);
const getArg = (name) =>
  args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const limit = getArg("limit") ? Number(getArg("limit")) : null;
const only = getArg("only");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Pulls { appId, title } out of the games data files by reading them as text.
 * The data uses TypeScript enums, which Node's type stripping can't run, and a
 * build step for a data script isn't worth a dependency.
 */
function collectApps() {
  const titleRe = /^\s*title:\s*"((?:[^"\\]|\\.)*)"/gm;
  const appRe = /store\.steampowered\.com\/app\/(\d+)/g;

  const byAppId = new Map();

  for (const file of readdirSync(GAMES_DIR).filter((f) =>
    /^games[A-Z]\.ts$/.test(f)
  )) {
    const src = readFileSync(join(GAMES_DIR, file), "utf8");

    const titles = [...src.matchAll(titleRe)].map((m) => ({
      index: m.index,
      title: m[1],
    }));

    for (const match of src.matchAll(appRe)) {
      const appId = match[1];
      if (byAppId.has(appId)) continue;

      // The game a link belongs to is the closest title above it.
      let owner = "(unknown)";
      for (const t of titles) {
        if (t.index < match.index) owner = t.title;
        else break;
      }
      byAppId.set(appId, { appId, title: owner, file });
    }
  }

  return [...byAppId.values()];
}

async function fetchJson(url) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) await sleep(DELAY_MS * 2 ** attempt);

    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });

      // Rate limited or a transient Steam hiccup: back off and retry.
      if (res.status === 429 || res.status >= 500) {
        lastError = new Error(`HTTP ${res.status}`);
        continue;
      }
      if (!res.ok) return { error: `HTTP ${res.status}` };

      return { data: await res.json() };
    } catch (err) {
      lastError = err;
    }
  }

  return { error: String(lastError?.message ?? lastError) };
}

async function fetchReviews(appId) {
  const { data, error } = await fetchJson(
    `https://store.steampowered.com/appreviews/${appId}` +
      `?json=1&language=all&purchase_type=all&num_per_page=0`
  );
  if (error) return { error };
  if (data?.success !== 1) return { error: "no review summary" };

  const s = data.query_summary ?? {};
  return {
    data: {
      reviewScore: s.review_score ?? null,
      reviewScoreDesc: s.review_score_desc ?? null,
      totalReviews: s.total_reviews ?? 0,
      totalPositive: s.total_positive ?? 0,
      totalNegative: s.total_negative ?? 0,
    },
  };
}

async function fetchDetails(appId) {
  const { data, error } = await fetchJson(
    `https://store.steampowered.com/api/appdetails?appids=${appId}&cc=us&l=en`
  );
  if (error) return { error };

  const entry = data?.[appId];
  // Delisted and region-locked apps answer with success: false.
  if (!entry?.success || !entry.data) return { error: "no store page" };

  const d = entry.data;
  return {
    data: {
      name: d.name ?? null,
      type: d.type ?? null,
      isFree: d.is_free ?? false,
      priceCents: d.price_overview?.final ?? null,
      currency: d.price_overview?.currency ?? null,
      discountPercent: d.price_overview?.discount_percent ?? 0,
      releaseDate: d.release_date?.date || null,
      comingSoon: d.release_date?.coming_soon ?? false,
      headerImage: d.header_image ?? null,
      genres: (d.genres ?? []).map((g) => g.description),
    },
  };
}

async function main() {
  const allApps = collectApps();
  const isPartialRun = Boolean(only || limit);

  let apps = allApps;
  if (only) apps = apps.filter((a) => a.appId === only);
  if (limit) apps = apps.slice(0, limit);

  if (apps.length === 0) {
    console.error("No Steam app IDs found — did the data format change?");
    process.exit(1);
  }

  // Start from the previous snapshot so a bad night degrades to stale data
  // rather than wiping games that happened to fail.
  const previous = existsSync(OUT_FILE)
    ? JSON.parse(readFileSync(OUT_FILE, "utf8"))
    : { apps: {} };
  const merged = { ...previous.apps };

  console.log(`Fetching ${apps.length} apps (~${
    Math.round((apps.length * 2 * DELAY_MS) / 60000)
  } min)\n`);

  const failed = [];
  const oddTypes = [];

  // Games get their store links corrected, which strands the old app ID in the
  // snapshot. Drop anything no longer referenced — but only on a full run,
  // since --only/--limit would otherwise delete everything it didn't fetch.
  if (!isPartialRun) {
    const live = new Set(allApps.map((a) => a.appId));
    for (const appId of Object.keys(merged)) {
      if (!live.has(appId)) {
        console.log(`Pruning ${appId} (${merged[appId].name}) — no longer linked`);
        delete merged[appId];
      }
    }
  }

  const flush = () => {
    const ordered = Object.fromEntries(
      Object.keys(merged)
        .sort((a, b) => Number(a) - Number(b))
        .map((k) => [k, merged[k]])
    );
    writeFileSync(
      OUT_FILE,
      JSON.stringify(
        { generatedAt: new Date().toISOString(), apps: ordered },
        null,
        2
      ) + "\n"
    );
    return Object.keys(ordered).length;
  };

  for (const [i, app] of apps.entries()) {
    const position = `[${String(i + 1).padStart(3)}/${apps.length}]`;

    const reviews = await fetchReviews(app.appId);
    await sleep(DELAY_MS);
    const details = await fetchDetails(app.appId);
    await sleep(DELAY_MS);

    if (reviews.error && details.error) {
      failed.push({ ...app, reason: reviews.error });
      console.warn(`${position} ${app.title} — FAILED (${reviews.error})`);
      continue;
    }

    if (details.data && details.data.type !== "game") {
      oddTypes.push({ ...app, type: details.data.type });
    }

    merged[app.appId] = {
      ...merged[app.appId],
      ...(details.data ?? {}),
      ...(reviews.data ?? {}),
      fetchedAt: new Date().toISOString(),
    };

    const r = reviews.data;
    const summary = r?.totalReviews
      ? `${Math.round((r.totalPositive / r.totalReviews) * 100)}% of ${
          r.totalReviews
        }`
      : "no reviews";
    console.log(`${position} ${app.title} — ${summary}`);

    if ((i + 1) % FLUSH_EVERY === 0) flush();
  }

  console.log(`\nWrote ${flush()} apps to ${OUT_FILE}`);

  if (oddTypes.length) {
    console.log("\nLinks that aren't base games (worth checking by hand):");
    for (const o of oddTypes)
      console.log(`  ${o.title} (${o.appId}) → type "${o.type}"`);
  }

  if (failed.length) {
    console.log(`\n${failed.length} failed:`);
    for (const f of failed) console.log(`  ${f.title} (${f.appId}) — ${f.reason}`);
  }

  const failureRate = failed.length / apps.length;
  if (failureRate > FAILURE_THRESHOLD) {
    console.error(
      `\n${Math.round(failureRate * 100)}% of apps failed — refusing to treat ` +
        `this run as healthy.`
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
