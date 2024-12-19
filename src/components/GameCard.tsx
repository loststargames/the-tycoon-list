import React, { useMemo, useState } from "react";
import { Game } from "../data/games/types";
import { Button } from "./ui/button";
import { Info, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { allGames } from "../data/games";
import { Badge } from "./ui/badge";

interface GameCardProps {
  game: Game;
  enableSteamWidgets: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  enableSteamWidgets,
}) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const steamLink = game.links.find((link) =>
    link.url.includes("store.steampowered.com")
  );
  const steamAppId = steamLink
    ? steamLink.url.match(/\/app\/(\d+)/)?.[1]
    : null;
  const sequels = useMemo(() => {
    if (game.sequelFamily) {
      return allGames.filter((g) => g.sequelFamily === game.sequelFamily);
    } else {
      return null;
    }
  }, [game.sequelFamily]);
  const upcoming = useMemo(() => {
    if (game.releaseDate) {
      return (
        game.releaseDate === "TBA" || new Date(game.releaseDate) > new Date()
      );
    }

    if (game.year) {
      return new Date(game.year) > new Date();
    }

    return false;
  }, [game.releaseDate, game.year]);

  return (
    <Card className="dark:bg-zinc-900 h-full flex flex-col">
      <CardHeader className="pb-2 flex-none">
        {upcoming ? (
          <div>
            <Badge variant="destructive" className="text-base">
              Not Released
            </Badge>
          </div>
        ) : (
          <div>
            <Badge variant="released" className="text-base">
              Released
            </Badge>
          </div>
        )}
        <p className="text-sm mt-1">
          <span className="font-light">Release Date:</span>{" "}
          <span className="font-normal">
            {game.releaseDate || "Not available"}
          </span>
        </p>
        <CardTitle className="text-xl">{game.title}</CardTitle>
        <p className="text-base">{game.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          {game.year ? (
            <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Year: {game.year}
            </p>
          ) : (
            <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Year: TBA
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <p className="flex flex-col sm:flex-row text-sm mb-1">
                <span className="mr-1 font-light">Themes:</span>
                <span className="font-normal">{game.themes.join(", ")}</span>
              </p>
              <p className="flex flex-col sm:flex-row text-sm mb-1">
                <span className="mr-1 font-light">Platforms:</span>
                <span className="font-normal">{game.platforms.join(", ")}</span>
              </p>
            </div>
            <div className="flex-1">
              <p className="flex flex-col sm:flex-row text-sm mb-1">
                <span className="mr-1 font-light">Gameplay Type:</span>
                <span className="font-normal">
                  {game.gameplayType.join(", ")}
                </span>
              </p>
              <p className="flex flex-col sm:flex-row text-sm mb-2">
                <span className="mr-1 font-light">Pricing:</span>
                <span className="font-normal">{game.pricing.join(", ")}</span>
              </p>
              <p className="flex flex-col sm:flex-row text-sm mb-1">
                <span className="mr-1 font-light">Stores:</span>
                <span className="font-normal">{game.stores.join(", ")}</span>
              </p>
            </div>
          </div>
          {sequels && (
            <div className="flex-1">
              <p className="flex text-sm mb-1">
                <span className="mr-1 font-light">Sequels Family:</span>
                <span className="font-normal">
                  {sequels.map((s) => s.title).join(", ")}
                </span>
              </p>
            </div>
          )}
          {game.ttlNote && (
            <div className="flex py-4">
              <Info />
              <p className="text-base ml-2">{game.ttlNote}</p>
            </div>
          )}
          {game.links && game.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {game.links.map((link) => (
                <a
                  key={link.name + link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="px-3 py-1">
                    <Link className="mr-1" />
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          )}
        </div>

        {enableSteamWidgets && !isIframeLoaded && <WidgetSkeleton />}
        {enableSteamWidgets && steamAppId && (
          <div className="w-full mt-4">
            <iframe
              src={`https://store.steampowered.com/widget/${steamAppId}/`}
              className="w-full h-[187px]"
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const WidgetSkeleton = () => (
  <div className="w-full h-[187px] mt-4 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />
);
