import React, { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, ExternalLink } from "lucide-react";
import { useFilters } from "../hooks/useFilters";
import { allGames } from "../data/games";
import { Game } from "../data/games/types";
import { getReleaseInfo } from "../lib/games";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  SteamAppStats,
  formatSteamPrice,
  getPositivePercent,
  getReviewHue,
  getSteamAppId,
  getSteamStats,
  getWilsonScore,
  steamGeneratedAt,
} from "../lib/steam";

type SortKey = "title" | "rating" | "reviews" | "year" | "price";
type SortDir = "asc" | "desc";

interface Row {
  game: Game;
  stats: SteamAppStats;
  appId: string;
  percent: number;
  wilsonScore: number;
  year: number | undefined;
}

const columns: { key: SortKey; label: string; align: "left" | "right" }[] = [
  { key: "title", label: "Game", align: "left" },
  { key: "rating", label: "Rating", align: "right" },
  { key: "reviews", label: "Reviews", align: "right" },
  { key: "year", label: "Year", align: "right" },
  { key: "price", label: "Price", align: "right" },
];

export const BestGames: React.FC = () => {
  const { filteredGames } = useFilters();
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  // The ranking is meant to read as a leaderboard, so it ignores the filter
  // bar unless asked. Off by default.
  const [applyFilters, setApplyFilters] = useState(false);
  const [weightByVolume, setWeightByVolume] = useState(true);

  const source = applyFilters ? filteredGames : allGames;

  const rows = useMemo(() => {
    const withStats: Row[] = [];

    for (const game of source) {
      const stats = getSteamStats(game);
      const appId = getSteamAppId(game);
      const percent = getPositivePercent(stats);
      const wilsonScore = getWilsonScore(stats);
      // Unreleased games and non-Steam entries have nothing to rank.
      if (stats && appId && percent !== null && wilsonScore !== null) {
        withStats.push({
          game,
          stats,
          appId,
          percent,
          wilsonScore,
          year: getReleaseInfo(game).year,
        });
      }
    }

    const direction = sortDir === "asc" ? 1 : -1;

    return withStats.sort((a, b) => {
      switch (sortKey) {
        case "title":
          return a.game.title.localeCompare(b.game.title) * direction;
        case "reviews":
          return (a.stats.totalReviews - b.stats.totalReviews) * direction;
        case "year":
          return ((a.year ?? 0) - (b.year ?? 0)) * direction;
        case "price":
          return (
            ((a.stats.isFree ? 0 : (a.stats.priceCents ?? 0)) -
              (b.stats.isFree ? 0 : (b.stats.priceCents ?? 0))) *
            direction
          );
        case "rating":
        default:
          if (weightByVolume) {
            return (
              (a.wilsonScore - b.wilsonScore ||
                a.stats.totalReviews - b.stats.totalReviews) * direction
            );
          }
          // Review count breaks ties so the bigger sample wins at equal %.
          return (
            (a.percent - b.percent ||
              a.stats.totalReviews - b.stats.totalReviews) * direction
          );
      }
    });
  }, [source, sortKey, sortDir, weightByVolume]);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      // Text reads best A-Z; numbers read best highest-first.
      setSortDir(key === "title" ? "asc" : "desc");
    }
  };

  const hiddenCount = source.length - rows.length;

  const toggles = (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 select-none">
      <div className="flex items-center gap-2">
        <Checkbox
          id="applyFilters"
          checked={applyFilters}
          onCheckedChange={(checked) => setApplyFilters(!!checked)}
        />
        <label
          htmlFor="applyFilters"
          className="cursor-pointer dark:text-white"
        >
          Apply Filters
        </label>
      </div>
      <div
        className="flex items-center gap-2"
        title="Wilson score: a handful of perfect reviews won't outrank thousands of slightly lower ones"
      >
        <Checkbox
          id="weightByVolume"
          checked={weightByVolume}
          onCheckedChange={(checked) => {
            const on = !!checked;
            setWeightByVolume(on);
            if (on) {
              setSortKey("rating");
              setSortDir("desc");
            }
          }}
        />
        <label
          htmlFor="weightByVolume"
          className="cursor-pointer dark:text-white"
        >
          Weight by volume
        </label>
      </div>
    </div>
  );

  if (rows.length === 0) {
    return (
      <div className="px-3 py-4 sm:p-4">
        <div className="mb-3">{toggles}</div>
        <p className="text-lg">No rated games match these filters.</p>
      </div>
    );
  }

  return (
    <div className="px-3 py-4 sm:p-4">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <p className="font-light">
          Ranking {rows.length} games by Steam reviews
        </p>
        {toggles}
      </div>

      <div className="overflow-x-auto rounded-md border border-zinc-200 dark:border-zinc-700">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-zinc-100 dark:bg-zinc-800">
            <tr>
              <th className="p-3 text-right font-semibold w-12">#</th>
              {columns.map((col) => {
                const active = sortKey === col.key;
                const Icon = !active
                  ? ArrowUpDown
                  : sortDir === "asc"
                    ? ArrowUp
                    : ArrowDown;

                return (
                  <th
                    key={col.key}
                    className={`p-3 font-semibold ${
                      col.align === "right" ? "text-right" : "text-left"
                    }`}
                    aria-sort={
                      active
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    <button
                      onClick={() => toggleSort(col.key)}
                      className={`inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                        col.align === "right" ? "flex-row-reverse" : ""
                      } ${active ? "text-blue-600 dark:text-blue-400" : ""}`}
                    >
                      {col.label}
                      <Icon size={14} className={active ? "" : "opacity-40"} />
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.game.title}-${row.game.year ?? ""}`}
                className="border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
              >
                <td className="p-3 text-right text-gray-500 dark:text-gray-400">
                  {i + 1}
                </td>
                <td className="p-3">
                  <a
                    href={`https://store.steampowered.com/app/${row.appId}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {row.game.title}
                    <ExternalLink size={13} className="opacity-50 shrink-0" />
                  </a>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {row.game.themes.join(", ")}
                  </span>
                </td>
                <td className="p-3 text-right whitespace-nowrap">
                  <span
                    className="review-score font-semibold"
                    style={
                      {
                        "--score-hue": getReviewHue(row.percent),
                      } as React.CSSProperties
                    }
                  >
                    {row.percent}%
                  </span>
                </td>
                <td className="p-3 text-right text-gray-600 dark:text-gray-300">
                  {row.stats.totalReviews.toLocaleString()}
                </td>
                <td className="p-3 text-right text-gray-600 dark:text-gray-300">
                  {row.year ?? "—"}
                </td>
                <td className="p-3 text-right whitespace-nowrap">
                  {row.stats.discountPercent > 0 && (
                    <Badge className="mr-2 bg-green-600 hover:bg-green-600 text-white">
                      -{row.stats.discountPercent}%
                    </Badge>
                  )}
                  {formatSteamPrice(row.stats) ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Steam data from {new Date(steamGeneratedAt).toLocaleDateString()}.
        {hiddenCount > 0 &&
          ` ${hiddenCount} games are not ranked — they have no Steam release or no reviews yet.`}
      </p>
    </div>
  );
};
