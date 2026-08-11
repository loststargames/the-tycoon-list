import React, { createContext, useContext } from "react";
import {
  Theme,
  Platform,
  Store,
  GameplayType,
  Pricing,
  YearComparison,
  Game,
} from "../data/games/types";

export interface FiltersState {
  selectedThemes: Theme[];
  selectedYear: number | null;
  yearComparison: YearComparison;
  showUpcoming: boolean;
  hasDiscount: boolean;
  hasMultiplayer: boolean;
  searchQuery: string;
  searchDescriptionQuery: string;
  selectedPlatforms: Platform[];
  selectedStores: Store[];
  selectedGameplayTypes: GameplayType[];
  selectedPricing: Pricing[];
}

export interface FiltersContextProps {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  filteredGames: Game[];
  clearFilters: () => void;
}

/**
 * Lives here rather than alongside the provider so FiltersContext.tsx exports
 * only a component, which is what React Fast Refresh requires.
 */
export const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
