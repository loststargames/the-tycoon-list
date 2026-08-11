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
  return appId ? apps[appId] ?? null : null;
};

/** Raw share of positive reviews, or null for games with no reviews yet. */
export const getPositivePercent = (
  stats: SteamAppStats | null
): number | null =>
  stats && stats.totalReviews > 0
    ? Math.round((stats.totalPositive / stats.totalReviews) * 100)
    : null;

export const hasDiscount = (game: Game): boolean =>
  (getSteamStats(game)?.discountPercent ?? 0) > 0;

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
