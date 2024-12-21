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
  {
    title: "Mad Games Tycoon",
    description:
      "Form your own game studio set in the early 1980s in a small garage. Develop your own game ideas, create a team and develop megahit video games. Research new technologies, train your staff and upgrade your office space, going from a lowly garage to a huge building. Expand your business and dominate the world market for video games!",
    year: 2016,
    themes: [Theme.GameDev],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/341000/Mad_Games_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "madGamesTycoon",
  },
  {
    title: "Mad Games Tycoon 2",
    description:
      "Start your own game development studio in 1976. Build your own offices, production facilities and server rooms. Develop the games of your dreams and produce the next next-gen console. Rise from a small garage company to a huge corporation.",
    year: 2023,
    themes: [Theme.GameDev],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1342330/Mad_Games_Tycoon_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "madGamesTycoon",
  },
  {
    title: "Mad TV Online",
    description:
      "Mad TV is an economic simulation browser game where you manage your own tv station.",
    year: 1991,
    themes: [Theme.TV],
    platforms: [Platform.Browser],
    stores: [Store.Browser],
    links: [
      {
        url: "https://www.madtv-online.com/",
        name: Store.Browser,
      },
    ],
    gameplayType: [
      GameplayType.BuildingBlocks,
      GameplayType.TextBased,
      GameplayType.PointClick,
    ],
    pricing: [Pricing.Free],
  },
];
