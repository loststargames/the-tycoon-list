import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesB: Game[] = [
  {
    title: "Big Biz Tycoon",
    description:
      "The objective of the game is to create a successful business by developing products. As products are sold, the player earns money depending on the production rate and price of the product. This enables them to hire employees and decorate the office building. ",
    year: 2002,
    themes: [Theme.ProductDevelopment, Theme.Office],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/big-biz-tycoon-c4o",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
    sequelFamily: "bigBizTycoon",
  },
  {
    title: "Big Biz Tycoon 2",
    description:
      "The objective of the game is to create a successful business by developing products. As products are sold, the player earns money depending on the production rate and price of the product. This enables them to hire employees and decorate the office building. ",
    year: 2003,
    themes: [Theme.ProductDevelopment, Theme.Office],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/big-biz-tycoon-2-ewu",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
    sequelFamily: "bigBizTycoon",
  },
  {
    title: "Big Pharma",
    description:
      "What if you had it in your power to rid the world of disease, to improve the lives of millions, to ease suffering and cure the sick… and earn a tidy profit? As the head of your own Pharmaceutical Conglomerate you have this power resting in your hands. Will you use it for good?",
    year: 2015,
    themes: [Theme.Pharmaceutical, Theme.FactoryLayout],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/344850/Big_Pharma/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Blooming Business: Casino",
    description:
      "Blooming Business: Casino is a relaxing management game with a narrative twist. Build and run your own fantasy casino in a bustling world full of animals and drama. Complete quests and manage your clientele. Keep everyone happy, from the clients, employees to the VIP’s.",
    year: 2023,
    themes: [Theme.Casino],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1388580/Blooming_Business_Casino/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Blockbuster Inc.",
    description:
      "Ever dreamed of making your own movies? Build up your own movie studio, scout for upcoming stars, and produce cutting-edge films and TV shows. Try to stay ahead of your competition throughout the history of cinematography.",
    year: 2024,
    themes: [Theme.Movies],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1793090/Blockbuster_Inc/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Big Ambitions",
    description:
      "Big Ambitions is a revolutionary role-playing business sim. Go from nothing to the biggest entrepreneur in New York by opening small businesses or slowly building huge corporations any way you like.",
    year: 2023,
    themes: [Theme.Retail, Theme.GeneralBusiness, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1331550/Big_Ambitions/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.ThirdPerson],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Blood Bar Tycoon",
    description:
      "Blood Bar Tycoon is a vampire bar management game. Build bars and blood factories, lure humans to harvest their blood, process it, and serve your customers: other vampires. Research quirky machines and deal with hunters! Expand through Crimson City to become a mighty Elder!",
    releaseDate: "04-02-2025",
    year: 2025,
    themes: [Theme.Brewery, Theme.Restaurant, Theme.AlternativeUniverse],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2776780/Blood_Bar_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
