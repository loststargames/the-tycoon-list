import { Game } from "../data/games/types";

/**
 * Parses the DD-MM-YYYY format used throughout the games data.
 *
 * `new Date("02-10-2026")` reads that string as MM-DD-YYYY and silently lands
 * on the wrong day, so release dates must always go through here.
 */
export const parseReleaseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

/** Whether a game has not been released yet — drives both the filter and the badge. */
export const isUpcoming = (game: Game): boolean => {
  if (game.releaseDate) {
    if (game.releaseDate === "TBA") return true;
    return parseReleaseDate(game.releaseDate) > new Date();
  }

  if (game.year) return game.year > new Date().getFullYear();

  return false;
};
