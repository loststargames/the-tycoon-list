import React, { useState } from "react";
import { Shuffle } from "lucide-react";
import { allGames } from "../data/games";
import { Game } from "../data/games/types";
import { getSteamStats } from "../lib/steam";
import { Button } from "./ui/button";
import { GameCard } from "./GameCard";

const pickRandom = (exclude?: Game): Game => {
  if (allGames.length < 2) return allGames[0];

  let next = exclude;
  while (next === exclude) {
    next = allGames[Math.floor(Math.random() * allGames.length)];
  }
  return next as Game;
};

export const RandomGame: React.FC = () => {
  // Seeded on mount so the tab opens on a game rather than an empty prompt.
  const [game, setGame] = useState<Game>(() => pickRandom());

  const headerImage = getSteamStats(game)?.headerImage;

  return (
    <div className="mx-auto max-w-2xl px-3 py-4 sm:p-4">
      <div className="flex justify-center mb-4">
        <Button onClick={() => setGame((current) => pickRandom(current))}>
          <Shuffle className="mr-2" />
          Shuffle
        </Button>
      </div>

      {headerImage && (
        <img
          key={headerImage}
          src={headerImage}
          alt={`${game.title} header`}
          className="w-full rounded-md mb-4"
        />
      )}

      <GameCard
        key={game.title + (game.year ?? "")}
        game={game}
        enableSteamWidgets={false}
      />
    </div>
  );
};
