import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { allGames } from "./data/games";
import {
  Theme,
  Platform,
  Store,
  GameplayType,
  Pricing,
  YearComparison,
  Game,
} from "./data/games/types";

interface FiltersState {
  selectedThemes: Theme[];
  selectedYear: number | null;
  yearComparison: YearComparison;
  showUpcoming: boolean;
  hasMultiplayer: boolean;
  searchQuery: string;
  searchDescriptionQuery: string;
  selectedPlatforms: Platform[];
  selectedStores: Store[];
  selectedGameplayTypes: GameplayType[];
  selectedPricing: Pricing[];
}

interface FiltersContextProps {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  filteredGames: Game[];
  clearFilters: () => void;
}

const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

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

  // Parse date in DD-MM-YYYY format
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  // Compute filteredGames based on filters
  const filteredGames = useMemo(() => {
    let result = allGames.slice(); // copy to avoid mutations

    const {
      selectedThemes,
      selectedYear,
      yearComparison,
      showUpcoming,
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
      const now = new Date();
      result = result.filter(
        (g) =>
          !g.releaseDate ||
          (g.releaseDate !== "TBA" && new Date(g.releaseDate) <= now)
      );
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
      if (a.releaseDate && parseDate(a.releaseDate) > now) return -1;
      if (b.releaseDate && parseDate(b.releaseDate) > now) return 1;

      // Sort the remaining by year (descending order)
      return b.year - a.year;
    });

    return result;
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, filteredGames, clearFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
