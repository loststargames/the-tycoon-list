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
  activeFilterCount: number;
}

/** Counts non-default filter dimensions. `showUpcoming: true` is the default. */
export function countActiveFilters(filters: FiltersState): number {
  let count = 0;
  if (filters.selectedThemes.length > 0) count += 1;
  if (filters.selectedYear !== null) count += 1;
  if (!filters.showUpcoming) count += 1;
  if (filters.hasDiscount) count += 1;
  if (filters.hasMultiplayer) count += 1;
  if (filters.searchQuery) count += 1;
  if (filters.searchDescriptionQuery) count += 1;
  if (filters.selectedPlatforms.length > 0) count += 1;
  if (filters.selectedStores.length > 0) count += 1;
  if (filters.selectedGameplayTypes.length > 0) count += 1;
  if (filters.selectedPricing.length > 0) count += 1;
  return count;
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
