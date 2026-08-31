import snapshot from "../data/steam-stats.json";
import { Game } from "../data/games/types";

export interface SteamAppStats {
  name: string | null;
  type: string | null;
  isFree: boolean;
  priceCents: number | null;
  currency: string | null;
  discountPercent: number;
  releaseDate: string | null;
  comingSoon: boolean;
  headerImage: string | null;
  genres: string[];
  reviewScore: number | null;
  reviewScoreDesc: string | null;
  totalReviews: number;
  totalPositive: number;
  totalNegative: number;
  fetchedAt: string;
}

const apps = snapshot.apps as Record<string, SteamAppStats>;

/** When the committed snapshot was last refreshed by scripts/fetch-steam.mjs. */
export const steamGeneratedAt = snapshot.generatedAt;

export const getSteamAppId = (game: Game): string | null =>
  game.links
    .find((link) => link.url.includes("store.steampowered.com"))
    ?.url.match(/\/app\/(\d+)/)?.[1] ?? null;

export const getSteamStats = (game: Game): SteamAppStats | null => {
  const appId = getSteamAppId(game);
  return appId ? (apps[appId] ?? null) : null;
};

/** Raw share of positive reviews, or null for games with no reviews yet. */
export const getPositivePercent = (
  stats: SteamAppStats | null,
): number | null =>
  stats && stats.totalReviews > 0
    ? Math.round((stats.totalPositive / stats.totalReviews) * 100)
    : null;

export const getWilsonScore = (stats: SteamAppStats | null): number | null => {
  if (!stats || stats.totalReviews <= 0) return null;

  const n = stats.totalReviews;
  const p = stats.totalPositive / n;
  const z = 1.96;
  const z2 = z * z;
  const centre = p + z2 / (2 * n);
  const margin = z * Math.sqrt((p * (1 - p) + z2 / (4 * n)) / n);

  return (centre - margin) / (1 + z2 / n);
};

export const hasDiscount = (game: Game): boolean =>
  (getSteamStats(game)?.discountPercent ?? 0) > 0;

/** Steam store price from the snapshot, or null when unknown / unavailable. */
export const formatSteamPrice = (
  stats: SteamAppStats | null,
): string | null => {
  if (!stats) return null;
  if (stats.isFree) return "Free";
  if (stats.priceCents === null) return null;
  return `$${(stats.priceCents / 100).toFixed(2)}`;
};

/**
 * Maps a review percentage onto a red-to-green hue.
 *
 * Clamped to 40-95 rather than 0-100 because that's where real ratings sit —
 * a linear map over the full range would paint almost every game green.
 */
export const getReviewHue = (percent: number): number => {
  const t = Math.min(Math.max((percent - 40) / 55, 0), 1);
  return Math.round(t * 120);
};
