import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesG: Game[] = [
  {
    title: "Game Dev Story",
    description:
      "Work hard and you may reach the top of the video game industry!",
    year: 2010,
    themes: [Theme.GameDev],
    platforms: [Platform.PC, Platform.iOS, Platform.Android],
    stores: [Store.Steam, Store.AppStore, Store.PlayStore],
    links: [
      {
        url: "https://store.steampowered.com/app/1847240/Game_Dev_Story/",
        name: Store.Steam,
      },
      {
        url: "https://apps.apple.com/us/app/game-dev-story/id396085661",
        name: Store.AppStore,
      },
      {
        url: "https://play.google.com/store/apps/details?id=net.kairosoft.android.gamedev3en",
        name: Store.PlayStore,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Game Dev Tycoon",
    description:
      "In Game Dev Tycoon you replay the history of the gaming industry by starting your own video game development company in the 80s. Create best selling games. Research new technologies and invent new game types. Become the leader of the market and gain worldwide fans.",
    year: 2013,
    themes: [Theme.GameDev],
    platforms: [
      Platform.PC,
      Platform.Mac,
      Platform.Linux,
      Platform.iOS,
      Platform.Android,
    ],
    stores: [Store.Steam, Store.AppStore, Store.PlayStore],
    links: [
      {
        url: "https://store.steampowered.com/app/239820/Game_Dev_Tycoon/",
        name: Store.Steam,
      },
      {
        url: "https://apps.apple.com/us/app/game-dev-tycoon/id1162580001",
        name: Store.AppStore,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.greenheartgames.gdt",
        name: Store.PlayStore,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Galacticare",
    description:
      "Build, manage and optimise intergalactic hospitals! Recruit staff to satisfy the whims of various alien species, and cure their bizarre illnesses - for money! Save the (literal) Galaxy in story mode, or head into sandbox to design the hospital of your dreams.",
    year: 2024,
    themes: [Theme.Hospital, Theme.AlternativeUniverse, Theme.Space],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/494730/Galacticare/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "GearCity",
    description:
      "Do you find tycoon games too simplistic? GearCity is a complex and in-depth business simulator. It focuses on a realistic economic simulation of the global automobile industry. The game takes several hours to grasp and hundreds of hours to master. Can you succeed where many other CEOs have failed?",
    year: 2022,
    themes: [Theme.Automobile],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/285110/GearCity/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TextBased, GameplayType.PointClick],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Game Tycoon 2",
    description:
      "In Game Tycoon 2 you find yourself in the middle of the big players. Get into the act and experience the fascination of the game development. Reach your goal and become the Game Tycoon!",
    year: 2016,
    themes: [Theme.GameDev],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/404640/Game_Tycoon_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
  },
];
