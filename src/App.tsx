import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Dices, Gamepad2, ListFilter, Percent, Trophy } from "lucide-react";
import { Header } from "./components/Header";
import { FiltersBar } from "./components/FiltersBar";
import { GamesList } from "./components/GamesList";
import { ThemeProvider } from "./ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Promo } from "./components/Promo";
import { Contribute } from "./components/Contribute";
import { BestGames } from "./components/BestGames";
import { RandomGame } from "./components/RandomGame";
import { Button } from "./components/ui/button";
import { useFilters } from "./hooks/useFilters";

const tabs = ["gamesList", "sale", "bestGames", "randomGame"] as const;
type Tab = (typeof tabs)[number];

const isTab = (value: string | null): value is Tab =>
  tabs.includes(value as Tab);

export const App: React.FC = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { activeFilterCount } = useFilters();
  const filtersActive = activeFilterCount > 0;
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const tab: Tab = isTab(tabParam) ? tabParam : "gamesList";

  const selectTab = (value: string) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      if (value === "gamesList") next.delete("tab");
      else next.set("tab", value);
      return next;
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans bg-white dark:bg-zinc-950 dark:text-white">
        <Header />
        <Contribute />
        <Tabs value={tab} onValueChange={selectTab}>
          <div className="flex items-center gap-2 border-b border-zinc-200 px-3 py-2 dark:border-zinc-700 sm:px-4">
            <Button
              type="button"
              variant={filtersOpen || filtersActive ? "default" : "outline"}
              className="h-10 shrink-0 px-2.5 sm:px-3"
              aria-label="Filters"
              aria-expanded={filtersOpen}
              aria-controls="filters-panel"
              onClick={() => setFiltersOpen((open) => !open)}
            >
              <ListFilter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
              {filtersActive && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                  {activeFilterCount}
                </span>
              )}
            </Button>
            <TabsList className="grid h-10 w-full flex-1 grid-cols-4 gap-0.5 p-0.5">
              <TabsTrigger
                value="gamesList"
                className="h-8 w-full gap-1 px-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:px-2"
              >
                <Gamepad2 className="h-4 w-4 shrink-0" />
                <span className="sm:hidden">List</span>
                <span className="hidden sm:inline">Games List</span>
              </TabsTrigger>
              <TabsTrigger
                value="sale"
                className="h-8 w-full gap-1 px-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:px-2"
              >
                <Percent className="h-4 w-4 shrink-0" />
                <span className="sm:hidden">Sale</span>
                <span className="hidden sm:inline">On Sale</span>
              </TabsTrigger>
              <TabsTrigger
                value="bestGames"
                className="h-8 w-full gap-1 px-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:px-2"
              >
                <Trophy className="h-4 w-4 shrink-0" />
                <span className="sm:hidden">Best</span>
                <span className="hidden sm:inline">Best Tycoon Games</span>
              </TabsTrigger>
              <TabsTrigger
                value="randomGame"
                className="h-8 w-full gap-1 px-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:px-2"
              >
                <Dices className="h-4 w-4 shrink-0" />
                <span className="sm:hidden">Random</span>
                <span className="hidden sm:inline">Random Game</span>
              </TabsTrigger>
            </TabsList>
          </div>
          {filtersOpen && <FiltersBar />}
          <TabsContent value="gamesList" className="mt-0">
            <GamesList />
          </TabsContent>
          <TabsContent value="sale" className="mt-0">
            <GamesList onSale />
          </TabsContent>
          <TabsContent value="bestGames" className="mt-0">
            <BestGames />
          </TabsContent>
          <TabsContent value="randomGame" className="mt-0">
            <RandomGame />
          </TabsContent>
        </Tabs>
        <Promo />
        <footer className="p-4 text-center text-sm bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 mt-4">
          The Tycoon List -
          <a
            href="https://github.com/loststargames/the-tycoon-list"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            GitHub
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
};
