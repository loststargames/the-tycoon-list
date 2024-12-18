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
  {
    title: "Movies Tycoon",
    description:
      "Movies Tycoon is a simulation game where you dive into the world of film-making. Start with a humble studio, scout and manage top talent, customize unique characters, and direct blockbuster films.",
    year: 2024,
    themes: [Theme.Movies],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2659050/Movies_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
