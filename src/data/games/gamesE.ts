import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesE: Game[] = [
  {
    title: "Empire TV Tycoon",
    description:
      "Empire TV Tycoon is a game in which you manage a TV channel and fight for audiences taking decisions that will project your channel to fame and fortune.You will decide the content of your channel, select advertisers, hire workers, make your own productions, hire actors, and engage in much more activities!",
    year: 2015,
    themes: [Theme.TV],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/377900/Empire_TV_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks, GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Esports Life Tycoon",
    description:
      "Manage your own esports squad, expand your gaming house, and defeat legendary teams to become the best in the world!",
    year: 2019,
    themes: [Theme.Esports],
    platforms: [Platform.PC, Platform.Mac],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/897410/Esports_Life_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "ESport Manager",
    description:
      "Would you like to try your hand as a manager of this e-sport? eSport Manager is a game based on the idea of e-sports competitions, especially the most popular - FPS AND MOBA.",
    year: 2018,
    themes: [Theme.Esports],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/652660/ESport_Manager/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Espresso Tycoon",
    description:
      "Espresso Tycoon - a coffee shop simulator. Create your brand, decorate the coffee shop, manage your employees, and take care of your customers. Use the 3D coffee editor to create coffee recipes, order supplies, and collect rating points. Build the whole coffee business and complete all the missions!",
    year: 2023,
    themes: [Theme.Coffee],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1543280/Espresso_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Evil Genius",
    description:
      "Everybody wants to rule the world! Achieve global power with EVIL GENIUS, the one and only complete world domination simulator. All the everyday tasks of the deliciously wicked mastermind are available to experience and master from building your ultra-secret base to developing spectacular super-weapons to carry out your nefarious master...",
    year: 2004,
    themes: [Theme.CrimeGangsters, Theme.Humour],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1543280/Espresso_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "evilGenius",
  },
  {
    title: "Evil Genius 2: World Domination",
    description:
      "A satirical spy-fi lair builder where YOU are the criminal mastermind! Construct your base, train your minions, defend your operations from the Forces of Justice, and achieve global domination!",
    year: 2021,
    themes: [Theme.CrimeGangsters, Theme.Humour],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/700600/Evil_Genius_2_World_Domination/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
    sequelFamily: "evilGenius",
  },
  {
    title: "E-Shop Tycoon",
    description:
      "E-Shop Tycoon is an isometric online shopping company management game. Fill up your warehouses, take orders, hire employees, expand and customize your offices. Protect your site against hackers, improve your reputation on social media.",
    releaseDate: "05-08-2025",
    year: 2025,
    themes: [Theme.GeneralBusiness, Theme.Retail],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2871960/EShop_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.NotSet],
  },
];
