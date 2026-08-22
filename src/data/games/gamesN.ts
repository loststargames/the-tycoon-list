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
  {
    title: "Nordfolk",
    description:
      "A text-based management game set in the Norse Viking Age, focused not on war, but on peaceful colony building. Assign villagers to tasks, build production chains, and stockpile food and firewood before winter sets in. Survive, found a saga, and return stronger.",
    year: undefined,
    releaseDate: "TBA",
    themes: [Theme.Viking],
    platforms: [Platform.PC, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/4485120/Nordfolk/",
        name: Store.Steam,
      },
      {
        url: "https://flodnes.itch.io/nordfolk-demo",
        name: Store.Itchio,
      },
      {
        url: "https://www.wobblegoat.com/games/nordfolk",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.LessThan10],
  },
];
