import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesI: Game[] = [
  {
    title: "Industry Giant",
    description:
      "In Industrial Giant you have to find a route to profit to prove your management skills in this resource management business simulation. Experience the soaring heights and the shattering depths of being an industrial giant!",
    year: 1997,
    themes: [
      Theme.GeneralBusiness,
      Theme.Industry,
      Theme.CityView,
      Theme.Transportation,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/521090/Industry_Giant/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "industryGiant",
  },
  {
    title: "Industry Giant 2",
    description:
      "Economic booms, stock market crashes, oil crises, upswings, triumphs... Now you can become the greatest power in industry!",
    year: 2015,
    themes: [
      Theme.GeneralBusiness,
      Theme.Industry,
      Theme.CityView,
      Theme.Transportation,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/271360/Industry_Giant_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "industryGiant",
  },
  {
    title: "Industry Giant 4.0",
    description:
      "Build an industrial empire from scratch in Industry Giant 4.0. Produce goods, build up your industries, construct transportation networks, plan production, manage finances, and navigate global events. Become the next business tycoon and write history!",
    year: 2024,
    themes: [
      Theme.GeneralBusiness,
      Theme.Industry,
      Theme.CityView,
      Theme.Transportation,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1129570/Industry_Giant_40/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "industryGiant",
  },
  {
    title: "Industry Manager: Future Technologies",
    description:
      "INDUSTRY MANAGER: Future Technologies is a classic economy simulation in which you can build your own empire, research new sustainable products, and sweep aside the competition on your way to fame and success.",
    year: 2016,
    themes: [
      Theme.GeneralBusiness,
      Theme.Industry,
      Theme.CityView,
      Theme.Transportation,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/384080/Industry_Manager_Future_Technologies/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
