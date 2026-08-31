import { Game } from "../data/games/types";
import { getSteamStats } from "./steam";

const TBA_LABELS = new Set(["tba", "to be announced", "coming soon"]);

const MONTHS: Record<string, number> = {
  january: 0,
  jan: 0,
  february: 1,
  feb: 1,
  march: 2,
  mar: 2,
  april: 3,
  apr: 3,
  may: 4,
  june: 5,
  jun: 5,
  july: 6,
  jul: 6,
  august: 7,
  aug: 7,
  september: 8,
  sep: 8,
  sept: 8,
  october: 9,
  oct: 9,
  november: 10,
  nov: 10,
  december: 11,
  dec: 11,
};

export interface ReleaseInfo {
  /** Human-readable date to show, from Steam when available. */
  label: string | null;
  /** Exact calendar date when we have a specific day (or a quarter/month start). */
  date: Date | null;
  year: number | undefined;
  upcoming: boolean;
}

interface ParsedDate {
  date: Date | null;
  year: number | undefined;
  tba: boolean;
}

const unknownDate = (): ParsedDate => ({
  date: null,
  year: undefined,
  tba: false,
});

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

const parseGameDate = (releaseDate: string | undefined): ParsedDate => {
  if (!releaseDate) return unknownDate();
  if (releaseDate === "TBA") return { date: null, year: undefined, tba: true };

  const date = parseReleaseDate(releaseDate);
  if (Number.isNaN(date.getTime())) return unknownDate();
  return { date, year: date.getFullYear(), tba: false };
};

/**
 * Steam store dates arrive as English strings: "Jun 22, 2009", "September 2026",
 * "Q4 2026", "2027", "Coming soon", "To be announced".
 */
const parseSteamDate = (raw: string | null): ParsedDate => {
  if (!raw) return unknownDate();
  const s = raw.trim();
  if (!s) return unknownDate();
  if (TBA_LABELS.has(s.toLowerCase())) {
    return { date: null, year: undefined, tba: true };
  }

  if (/^\d{4}$/.test(s)) {
    return { date: null, year: Number(s), tba: false };
  }

  const quarter = s.match(/^Q([1-4])\s+(\d{4})$/i);
  if (quarter) {
    const year = Number(quarter[2]);
    const month = (Number(quarter[1]) - 1) * 3;
    return { date: new Date(year, month, 1), year, tba: false };
  }

  const full = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (full) {
    const month = MONTHS[full[1].toLowerCase()];
    if (month !== undefined) {
      const year = Number(full[3]);
      return { date: new Date(year, month, Number(full[2])), year, tba: false };
    }
  }

  const monthYear = s.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTHS[monthYear[1].toLowerCase()];
    if (month !== undefined) {
      const year = Number(monthYear[2]);
      return { date: new Date(year, month, 1), year, tba: false };
    }
  }

  return unknownDate();
};

/**
 * Steam snapshot is the source of truth for whether a game is out and what
 * date to show. Hand-entered `releaseDate` is the fallback when there is no
 * Steam page. Catalog `year` stays hand-entered (Steam dates are often store
 * launches); Steam only fills year in when it's missing.
 */
export const getReleaseInfo = (game: Game): ReleaseInfo => {
  const now = new Date();
  const stats = getSteamStats(game);
  const fallback = parseGameDate(game.releaseDate);

  if (stats) {
    const steam = parseSteamDate(stats.releaseDate);
    const upcoming =
      stats.comingSoon ||
      steam.tba ||
      (steam.date !== null && steam.date > now);

    return {
      label: stats.releaseDate || game.releaseDate || null,
      date: steam.date ?? fallback.date,
      // Steam's date is often a store launch, not the original release, so the
      // catalog year stays hand-entered. Steam only fills it in when missing.
      year: game.year ?? steam.year ?? fallback.year,
      upcoming,
    };
  }

  const upcoming =
    fallback.tba ||
    (fallback.date !== null && fallback.date > now) ||
    (game.year !== undefined &&
      game.year > now.getFullYear() &&
      fallback.date === null);

  return {
    label: game.releaseDate ?? null,
    date: fallback.date,
    year: fallback.year ?? game.year,
    upcoming,
  };
};

/** Whether a game has not been released yet — drives both the filter and the badge. */
export const isUpcoming = (game: Game): boolean => getReleaseInfo(game).upcoming;
