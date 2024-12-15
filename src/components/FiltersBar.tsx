import React from "react";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import {
  Theme,
  Platform,
  Store,
  YearComparison,
  GameplayType,
  Pricing,
} from "../data/games/types";
import { MultiSelect } from "./ui/multi-select";
import { ChevronLeft, ChevronRight, Equal } from "lucide-react";
import { Button } from "./ui/button";
import { useFilters } from "../FiltersContext";

const themes = Object.values(Theme);
const platforms = Object.values(Platform);
const stores = Object.values(Store);
const gameplayTypes = Object.values(GameplayType);
const pricings = Object.values(Pricing);

const themesKeys = themes.map((t) => ({ label: t, value: t }));
const platformsKeys = platforms.map((t) => ({ label: t, value: t }));
const storesKeys = stores.map((t) => ({ label: t, value: t }));
const gameplayTypesKeys = gameplayTypes.map((t) => ({ label: t, value: t }));
const pricingsKeys = pricings.map((t) => ({ label: t, value: t }));

const comparisonOptions = [
  {
    value: YearComparison.BEFORE,
    label: "Before",
    icon: (
      <div className="flex">
        <ChevronLeft size={16} />
        <Equal size={16} />
      </div>
    ),
  },
  {
    value: YearComparison.SAME,
    label: "Same",
    icon: <Equal size={16} />,
  },
  {
    value: YearComparison.AFTER,
    label: "After",
    icon: (
      <div className="flex">
        <ChevronRight size={16} />
        <Equal size={16} />
      </div>
    ),
  },
];

export const FiltersBar: React.FC = () => {
  const { filters, setFilters } = useFilters();

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

  const updateFilter = <T extends keyof typeof filters>(
    key: T,
    value: (typeof filters)[T]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 px-6 flex flex-col gap-4 bg-white border-t border-b-2 border-zinc-200 dark:bg-zinc-900 dark:border-t dark:border-b-2 dark:border-zinc-700">
      <h1 className="text-xl font-semibold">Filters</h1>
      <div className="flex items-center gap-2">
        <Checkbox
          id="upcoming"
          checked={showUpcoming}
          onCheckedChange={(checked) => updateFilter("showUpcoming", !!checked)}
        />
        <label htmlFor="upcoming" className="dark:text-white">
          Show Upcoming Games
        </label>
        <Checkbox
          id="multiplayer"
          checked={hasMultiplayer}
          onCheckedChange={(checked) =>
            updateFilter("hasMultiplayer", !!checked)
          }
          className="ml-4"
        />
        <label htmlFor="multiplayer" className="dark:text-white">
          Has Multiplayer
        </label>
      </div>

      <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:gap-2 sm:mt-0">
        <div className="flex items-end gap-2 md:mr-4">
          <div className="w-40">
            <label className="block text-sm mb-1 dark:text-white">Year</label>
            <Input
              type="number"
              value={selectedYear?.toString() || ""}
              onChange={(e) =>
                updateFilter(
                  "selectedYear",
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
              placeholder="Any"
            />
          </div>
          <div className="flex gap-1">
            {comparisonOptions.map((option) => (
              <Button
                key={option.value}
                disabled={!selectedYear}
                onClick={() => updateFilter("yearComparison", option.value)}
                className={`p-2 rounded ${
                  yearComparison === option.value
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                } hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors`}
                aria-label={option.label}
                title={option.label}
              >
                {option.icon}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1 dark:text-white">
            Search Titles
          </label>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => updateFilter("searchQuery", e.target.value)}
            placeholder="Search titles..."
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1 dark:text-white">
            Search Descriptions
          </label>
          <Input
            type="text"
            value={searchDescriptionQuery}
            onChange={(e) =>
              updateFilter("searchDescriptionQuery", e.target.value)
            }
            placeholder="Search descriptions..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <MultiSelect
          options={themesKeys}
          onValueChange={(val) =>
            updateFilter("selectedThemes", val as Theme[])
          }
          defaultValue={selectedThemes}
          placeholder="Select Themes"
          variant="inverted"
          maxCount={20}
        />
        <MultiSelect
          options={platformsKeys}
          onValueChange={(val) =>
            updateFilter("selectedPlatforms", val as Platform[])
          }
          defaultValue={selectedPlatforms}
          placeholder="Select Platforms"
          variant="inverted"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MultiSelect
          options={gameplayTypesKeys}
          onValueChange={(val) =>
            updateFilter("selectedGameplayTypes", val as GameplayType[])
          }
          defaultValue={selectedGameplayTypes}
          placeholder="Select Gameplay Type"
          variant="inverted"
        />
        <MultiSelect
          options={pricingsKeys}
          onValueChange={(val) =>
            updateFilter("selectedPricing", val as Pricing[])
          }
          defaultValue={selectedPricing}
          placeholder="Select Pricing"
          variant="inverted"
        />
        <MultiSelect
          options={storesKeys}
          onValueChange={(val) =>
            updateFilter("selectedStores", val as Store[])
          }
          defaultValue={selectedStores}
          placeholder="Select Stores"
          variant="inverted"
        />
      </div>
    </div>
  );
};
