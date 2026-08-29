import React, { useMemo, useState } from "react";
import { GameCard } from "./GameCard";
import { Checkbox } from "./ui/checkbox";
import { useFilters } from "../hooks/useFilters";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const GamesList: React.FC = () => {
  const { filteredGames } = useFilters();
  const [enableSteamWidgets, setEnableSteamWidgets] = useState(true);

  const { displayedData, targetRef } = useInfiniteScroll({
    data: filteredGames,
    itemsPerPage: 9,
  });

  const gamesList = useMemo(() => {
    return displayedData.map((game) => (
      <GameCard
        key={game.title + (game.year ?? "")}
        game={game}
        enableSteamWidgets={enableSteamWidgets}
      />
    ));
  }, [displayedData, enableSteamWidgets]);

  if (filteredGames.length === 0) {
    return <p className="px-3 py-4 text-lg sm:p-4">No games found.</p>;
  }

  return (
    <>
      <div className="mt-4 flex flex-col gap-2 px-3 sm:mt-6 sm:ml-6 sm:flex-row sm:items-center sm:gap-6 sm:px-0">
        <p className="font-light">Displaying {filteredGames.length} games</p>
        <div className="flex items-center gap-2">
          <Checkbox
            id="enableSteamWidgets"
            checked={enableSteamWidgets}
            onCheckedChange={(checked) => setEnableSteamWidgets(!!checked)}
          />
          <label htmlFor="enableSteamWidgets" className="dark:text-white">
            Enable Steam Widgets
          </label>
        </div>
      </div>
      <div
        className={`grid gap-4 px-3 py-4 sm:p-4
          ${
            enableSteamWidgets
              ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          }`}
      >
        {gamesList}
      </div>
      <div ref={targetRef} style={{ height: "1px" }} />
    </>
  );
};
