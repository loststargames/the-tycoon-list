import React, { useEffect, useMemo, useState } from "react";
import { Game } from "../data/games/types";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Info, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { allGames } from "../data/games";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import {
  formatSteamPrice,
  getPositivePercent,
  getReviewHue,
  getSteamAppId,
  getSteamStats,
  type SteamScreenshot,
} from "../lib/steam";
import { getReleaseInfo } from "../lib/games";
import { withUtm } from "../lib/utm";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const steamAppId = getSteamAppId(game);
  const steamUrl =
    game.links.find((link) => link.url.includes("store.steampowered.com"))
      ?.url ?? null;
  const steamStats = getSteamStats(game);
  const screenshots = steamStats?.screenshots ?? [];
  const reviewPercent = getPositivePercent(steamStats);
  const steamPrice = formatSteamPrice(steamStats);
  const sequels = useMemo(() => {
    if (game.sequelFamily) {
      return allGames.filter((g) => g.sequelFamily === game.sequelFamily);
    } else {
      return null;
    }
  }, [game.sequelFamily]);
  const release = useMemo(() => getReleaseInfo(game), [game]);
  const upcoming = release.upcoming;

  return (
    <Card className="dark:bg-zinc-900 h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-4 flex-none space-y-3">
        {(upcoming || (release.upcoming && release.label)) && (
          <div className="flex flex-wrap items-center gap-3">
            {upcoming && (
              <Badge variant="destructive" className="text-base">
                Not Released
              </Badge>
            )}
            {release.upcoming && release.label && (
              <p className="text-lg">
                <span className="font-light">Release Date:</span>{" "}
                <span className="font-medium">{release.label}</span>
              </p>
            )}
          </div>
        )}
        <CardTitle className="text-xl">
          {steamUrl ? (
            <a
              href={withUtm(steamUrl, "catalog", "title")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              {game.title}
              <span className="sr-only">on Steam</span>
            </a>
          ) : (
            game.title
          )}
          {reviewPercent !== null && steamStats && (
            <span className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap">
              [
              <span
                className="review-score font-semibold"
                style={
                  {
                    "--score-hue": getReviewHue(reviewPercent),
                  } as React.CSSProperties
                }
              >
                {reviewPercent}%
              </span>{" "}
              - {steamStats.totalReviews.toLocaleString()}{" "}
              {steamStats.totalReviews === 1 ? "review" : "reviews"}]
            </span>
          )}
        </CardTitle>
        {screenshots.length > 0 && (
          <ScreenshotStrip title={game.title} screenshots={screenshots} />
        )}
        {steamAppId && (
          <div className="relative h-[190px] w-full overflow-hidden rounded-md bg-[#1b2838]">
            {!isIframeLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
            )}
            <iframe
              src={`https://store.steampowered.com/widget/${steamAppId}/`}
              title={`${game.title} on Steam`}
              className="h-[190px] w-full"
              onLoad={() => setIsIframeLoaded(true)}
            />
          </div>
        )}
        {!steamAppId && <p className="text-base">{game.description}</p>}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          {release.year && (
            <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
              Year: {release.year}
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
                <span className="font-normal">
                  {steamPrice ?? game.pricing.join(", ")}
                  {steamPrice &&
                    steamStats &&
                    steamStats.discountPercent > 0 && (
                      <span className="ml-1 text-green-600 dark:text-green-400">
                        -{steamStats.discountPercent}%
                      </span>
                    )}
                </span>
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
          {game.links && game.links.length > 0 && !(steamAppId && game.links.length === 1) && (
            <div className="flex flex-wrap gap-2 mt-2">
              {game.links.map((link) => (
                <a
                  key={link.name + link.url}
                  href={withUtm(link.url, "catalog", link.name)}
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
      </CardContent>
    </Card>
  );
};

const ScreenshotStrip: React.FC<{
  title: string;
  screenshots: SteamScreenshot[];
}> = ({ title, screenshots }) => {
  const [active, setActive] = useState<number | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const shot = active !== null ? screenshots[active] : null;
  const waiting = shot !== null && loadedSrc !== shot.full;

  const shift = (delta: number) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + delta + screenshots.length) % screenshots.length;
    });
  };

  useEffect(() => {
    if (active === null || screenshots.length < 2) return;
    const neighbors = [1, -1].map(
      (delta) =>
        screenshots[(active + delta + screenshots.length) % screenshots.length],
    );
    for (const neighbor of neighbors) {
      const img = new Image();
      img.src = neighbor.full;
    }
  }, [active, screenshots]);

  return (
    <>
      <div
        className="screenshot-strip -mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain scroll-px-6 px-6 pb-1"
        aria-label={`${title} screenshots`}
      >
        {screenshots.map((item, index) => (
          <button
            key={`${item.full}-${index}`}
            type="button"
            className="shrink-0 snap-start overflow-hidden rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setActive(index)}
          >
            <img
              src={item.thumb}
              alt={`${title} screenshot ${index + 1}`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="aspect-video h-36 w-auto bg-zinc-200 object-cover dark:bg-zinc-800 sm:h-44"
            />
          </button>
        ))}
      </div>
      <Dialog
        open={shot !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent
          className="max-w-5xl border-zinc-800 bg-zinc-950 p-3 sm:p-4"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              shift(1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              shift(-1);
            }
          }}
        >
          <DialogTitle className="sr-only">
            {title} screenshot {active !== null ? active + 1 : 1} of{" "}
            {screenshots.length}
          </DialogTitle>
          {shot && (
            <div className="relative flex min-h-[40vh] items-center justify-center">
              {waiting && (
                <div className="absolute inset-0 animate-pulse rounded-md bg-zinc-800" />
              )}
              <img
                key={shot.full}
                src={shot.full}
                alt={`${title} screenshot ${(active ?? 0) + 1}`}
                onLoad={() => setLoadedSrc(shot.full)}
                className={`max-h-[75vh] w-full rounded-md object-contain ${
                  waiting ? "opacity-0" : ""
                }`}
              />
            </div>
          )}
          {screenshots.length > 1 && (
            <div className="flex items-center justify-between text-sm text-zinc-300">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => shift(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft />
              </Button>
              <span>
                {(active ?? 0) + 1} / {screenshots.length}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => shift(1)}
                aria-label="Next screenshot"
              >
                <ChevronRight />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
