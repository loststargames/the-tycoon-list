import React, { useMemo, useState } from "react";
import { GameCard } from "./GameCard";
import { Checkbox } from "./ui/checkbox";
import { useFilters } from "../FiltersContext";
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
    return <p className="p-4 text-lg">No games found.</p>;
  }

  return (
    <>
      <div className="ml-6 mt-6 flex mt-2 items-center">
        <p className="font-light">Displaying {filteredGames.length} games</p>
        <div className="flex items-center gap-2 ml-6">
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
        className={`grid gap-4 p-4 
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
