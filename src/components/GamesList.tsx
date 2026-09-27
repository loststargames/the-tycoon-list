import React, { useMemo } from "react";
import { GameCard } from "./GameCard";
import { useFilters } from "../hooks/useFilters";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { hasDiscount } from "../lib/steam";

export const GamesList: React.FC<{ onSale?: boolean }> = ({ onSale = false }) => {
  const { filteredGames } = useFilters();
  const games = useMemo(
    () => (onSale ? filteredGames.filter(hasDiscount) : filteredGames),
    [filteredGames, onSale]
  );

  const { displayedData, targetRef } = useInfiniteScroll({
    data: games,
    itemsPerPage: 9,
  });

  const gamesList = useMemo(() => {
    return displayedData.map((game) => (
      <GameCard key={game.title + (game.year ?? "")} game={game} />
    ));
  }, [displayedData]);

  if (games.length === 0) {
    return <p className="px-3 py-4 text-lg sm:p-4">No games found.</p>;
  }

  return (
    <>
      <div className="mt-4 px-3 sm:mt-6 sm:ml-6 sm:px-0">
        <p className="font-light">Displaying {games.length} games</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 py-4 sm:p-4 md:grid-cols-2 xl:grid-cols-3">
        {gamesList}
      </div>
      <div ref={targetRef} style={{ height: "1px" }} />
    </>
  );
};
