import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesM: Game[] = [
  {
    title: "MMORPG Tycoon 2",
    description:
      "MMORPG Tycoon 2 is a single-player world-builder game about creating the greatest MMORPG of all time – yours.",
    year: 2020,
    themes: [Theme.Dungeon, Theme.Software, Theme.GameDev],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/486860/MMORPG_Tycoon_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
