import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesY: Game[] = [
  {
    title: "Youtubers Life",
    description:
      "Become the most successful youtuber on the planet! Create videos, get subscribers, attend events, interact with your fans… and grow your channel. Live a youtuber’s life!",
    year: 2016,
    themes: [Theme.StreamerYoutuber],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/428690/Youtubers_Life/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.ThirdPerson],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
