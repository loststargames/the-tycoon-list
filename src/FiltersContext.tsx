import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { allGames } from "./data/games";
import { hasDiscount as gameHasDiscount } from "./lib/steam";
import { isUpcoming, parseReleaseDate } from "./lib/games";
import {
  countActiveFilters,
  FiltersContext,
  FiltersState,
} from "./hooks/useFilters";
import {
  Theme,
  Platform,
  Store,
  GameplayType,
  Pricing,
  YearComparison,
} from "./data/games/types";

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parseArrayParam = (param: string | null) => {
    return param ? param.split(",") : [];
  };

  // Initialize filters from URL params
  const initialState: FiltersState = {
    selectedThemes: parseArrayParam(searchParams.get("themes")) as Theme[],
    selectedYear: searchParams.get("year")
      ? parseInt(searchParams.get("year")!, 10)
      : null,
    yearComparison:
      (searchParams.get("yearComparison") as YearComparison) ||
      YearComparison.SAME,
    showUpcoming: searchParams.get("showUpcoming") !== "false",
    hasDiscount: searchParams.get("hasDiscount") === "true",
    hasMultiplayer: searchParams.get("hasMultiplayer") === "true",
    searchQuery: searchParams.get("searchQuery") || "",
    searchDescriptionQuery: searchParams.get("searchDescriptionQuery") || "",
    selectedPlatforms: parseArrayParam(
      searchParams.get("platforms")
    ) as Platform[],
    selectedStores: parseArrayParam(searchParams.get("stores")) as Store[],
    selectedGameplayTypes: parseArrayParam(
      searchParams.get("gameplayTypes")
    ) as GameplayType[],
    selectedPricing: parseArrayParam(searchParams.get("pricing")) as Pricing[],
  };

  const [filters, setFilters] = useState<FiltersState>(initialState);

  const clearFilters = () => {
    setFilters({
      selectedThemes: [],
      selectedYear: null,
      yearComparison: YearComparison.SAME,
      showUpcoming: true,
      hasDiscount: false,
      hasMultiplayer: false,
      searchQuery: "",
      searchDescriptionQuery: "",
      selectedPlatforms: [],
      selectedStores: [],
      selectedGameplayTypes: [],
      selectedPricing: [],
    });
  };

  // Update URL whenever filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    const {
      selectedThemes,
      selectedYear,
      yearComparison,
      showUpcoming,
      hasDiscount,
      hasMultiplayer,
      searchQuery,
      searchDescriptionQuery,
      selectedPlatforms,
      selectedStores,
      selectedGameplayTypes,
      selectedPricing,
    } = filters;

    if (selectedThemes.length) params.themes = selectedThemes.join(",");
    if (selectedYear !== null) params.year = selectedYear.toString();
    if (yearComparison !== YearComparison.SAME)
      params.yearComparison = yearComparison;
    if (!showUpcoming) params.showUpcoming = "false";
    if (hasDiscount) params.hasDiscount = "true";
    if (hasMultiplayer) params.hasMultiplayer = "true";
    if (searchQuery) params.searchQuery = searchQuery;
    if (searchDescriptionQuery)
      params.searchDescriptionQuery = searchDescriptionQuery;
    if (selectedPlatforms.length)
      params.platforms = selectedPlatforms.join(",");
    if (selectedStores.length) params.stores = selectedStores.join(",");
    if (selectedGameplayTypes.length)
      params.gameplayTypes = selectedGameplayTypes.join(",");
    if (selectedPricing.length) params.pricing = selectedPricing.join(",");

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Compute filteredGames based on filters
  const filteredGames = useMemo(() => {
    let result = allGames.slice(); // copy to avoid mutations

    const {
      selectedThemes,
      selectedYear,
      yearComparison,
      showUpcoming,
      hasDiscount,
      hasMultiplayer,
      searchQuery,
      searchDescriptionQuery,
      selectedPlatforms,
      selectedStores,
      selectedGameplayTypes,
      selectedPricing,
    } = filters;

    // Filter by Year with Comparison
    if (selectedYear !== null) {
      switch (yearComparison) {
        case YearComparison.SAME:
          result = result.filter((g) => g.year === selectedYear);
          break;
        case YearComparison.BEFORE:
          result = result.filter(
            (g) => g.year !== undefined && g.year <= selectedYear
          );
          break;
        case YearComparison.AFTER:
          result = result.filter(
            (g) =>
              (g.year !== undefined && g.year >= selectedYear) ||
              g.releaseDate === "TBA"
          );
          break;
        default:
          break;
      }
    }

    // Filter Upcoming Releases
    if (!showUpcoming) {
      result = result.filter((g) => !isUpcoming(g));
    }

    // Filter by Steam Discount
    if (hasDiscount) {
      result = result.filter(gameHasDiscount);
    }

    // Filter by Multiplayer
    if (hasMultiplayer) {
      result = result.filter((g) => g.hasMultiplayer);
    }

    // Filter by Search Query (Title)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((g) => g.title.toLowerCase().includes(q));
    }

    // Filter by Search Description Query
    if (searchDescriptionQuery) {
      const q = searchDescriptionQuery.toLowerCase();
      result = result.filter((g) => g.description.toLowerCase().includes(q));
    }

    // Filter by Themes
    if (selectedThemes.length > 0) {
      result = result.filter((g) =>
        selectedThemes.some((th) => g.themes.includes(th))
      );
    }

    // Filter by Platforms
    if (selectedPlatforms.length > 0) {
      result = result.filter((g) =>
        selectedPlatforms.some((p) => g.platforms.includes(p))
      );
    }

    // Filter by Stores
    if (selectedStores.length > 0) {
      result = result.filter((g) =>
        selectedStores.some((s) => g.stores.includes(s))
      );
    }

    // Filter by Gameplay Type
    if (selectedGameplayTypes.length > 0) {
      result = result.filter((g) =>
        selectedGameplayTypes.some((s) => g.gameplayType.includes(s))
      );
    }

    // Filter by Pricing
    if (selectedPricing.length > 0) {
      result = result.filter((g) =>
        selectedPricing.some((s) => g.pricing.includes(s))
      );
    }

    // Sort results
    result.sort((a, b) => {
      // Prioritize games with "TBA" release date or undefined year
      if (a.releaseDate === "TBA" || a.year === undefined) return -1;
      if (b.releaseDate === "TBA" || b.year === undefined) return 1;

      const now = new Date();

      // Prioritize games with future release dates
      if (a.releaseDate && parseReleaseDate(a.releaseDate) > now) return -1;
      if (b.releaseDate && parseReleaseDate(b.releaseDate) > now) return 1;

      // Sort the remaining by year (descending order)
      return b.year - a.year;
    });

    return result;
  }, [filters]);

  const activeFilterCount = useMemo(
    () => countActiveFilters(filters),
    [filters]
  );

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        filteredGames,
        clearFilters,
        activeFilterCount,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
