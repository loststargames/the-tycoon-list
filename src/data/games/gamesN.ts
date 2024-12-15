import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesN: Game[] = [
  {
    title: "News Tower",
    description:
      "Develop your newspaper and become New York’s new media mogul! In this tycoon, build and manage your newspaper from printer to toilet. Create your editorial line and lead your journalists through unique 1930's stories and dig out the latest scoops!",
    year: 2024,
    themes: [Theme.NewsTabloid],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1649950/News_Tower/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
