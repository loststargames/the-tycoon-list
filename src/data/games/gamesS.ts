import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesS: Game[] = [
  {
    title: "Startopia",
    description:
      "A once thriving network of space stations and planets have been left lifeless, redundant scars of the apocalypse. Into this age of darkness comes light. You will lead the way in rebuilding the network of space stations to a standard accepted by the individual alien races, attracting them to harness their expertise and research new...",
    year: 2001,
    themes: [Theme.Spaceship, Theme.Space],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/243040/Startopia/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Surviving Mars",
    description:
      "There will be challenges to overcome. Execute your strategy and improve your colony’s chances of survival while unlocking the mysteries of this alien world. Are you ready? Mars is waiting for you.",
    year: 2018,
    themes: [Theme.Space, Theme.CityBuilder, Theme.Colonization],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/464920/Surviving_Mars/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Software Inc.",
    description:
      "Construct and design buildings for optimal working conditions. Hire people to design and release software, so you can defeat the simulated competition and take over their businesses. Manage and educate your employees to make sure they are skilled and satisfied with their job.",
    year: 2015,
    themes: [Theme.Office, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam, Store.OwnWebsite],
    links: [
      {
        url: "https://store.steampowered.com/app/362620/Software_Inc/",
        name: Store.Steam,
      },
      {
        url: "https://swinc.net/#DRMFree",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    hasMultiplayer: true,
  },
  {
    title: "Startup Freak",
    description:
      "In Startup Freak you take the role of a budding entrepreneur, and grow your very own software startup from humble beginnings to a multi-million dollar company. Along the way you will have to overcome countless challenges. But the ultimate question you must answer: are you a Startup Freak?",
    year: 2019,
    themes: [Theme.Startup, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/722660/Startup_Freak/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Startup Company",
    description:
      "Startup Company is a business simulation sandbox game where you’re the CEO of a new company. Your job is to build your very own website and compete against the largest tech giants on the planet!",
    year: 2020,
    themes: [Theme.Startup, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/606800/Startup_Company/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "SimCasino",
    description:
      "Modern Casino Tycoon Simulation in full 3D glory. Build the casino. Set the odds. Expand into a luxury hotel/casino or go cheap & extract max profits. Keep the vault secure at all times, and beware of criminals & cheaters!!",
    year: 2021,
    themes: [Theme.Casino],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1158420/SimCasino",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Showrunner",
    description:
      "Create and run your own TV show! An isometric management game where you craft scripts, populate your world with characters and cast actors to play them. Hire and manage staff, develop your studio and gain a dedicated following.",
    year: 2023,
    themes: [Theme.TV],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2058200/Showrunner/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Snowtopia: Ski Resort Builder",
    description:
      "Build your ideal ski resort. Keep skiers smiling with fresh pistes and fine facilities. Ski, build and chill in the wintry world of Snowtopia where everyone is welcome!",
    year: 2022,
    themes: [Theme.SnowSki],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1124260/Snowtopia_Ski_Resort_Builder/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "SimAirport",
    description:
      "Build & Manage Your Airport. An International Hub or a Regional Masterpiece -- it's up to you. Buy more land to scale out, or escalators to scale up with MULTIPLE FLOORS. You're in full control in this modern business management tycoon!",
    year: 2020,
    themes: [Theme.Airport],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/598330/SimAirport/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "SimTower",
    description:
      "A construction and management simulation released in 1994 for MS Windows and Macintosh System 7 building a vertical tower with elevators, managing the business of the tower, placing facilities and elevators in it. Developed by Yoot Saito and published by Maxis in North America and Europe. A sequel, Yoot Tower, was released in 1998. It was also released on 3DO and Sega Saturn",
    year: 1994,
    themes: [
      Theme.GeneralBusiness,
      Theme.ShoppingCentre,
      Theme.PropertyRentals,
      Theme.Office,
    ],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://en.wikipedia.org/wiki/SimTower",
        name: "Wikipedia",
      },
      {
        url: "https://www.myabandonware.com/game/simtower-the-vertical-empire-3f2",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.Free],
    platforms: [Platform.PC, Platform.Mac],
  },
  {
    title: "SimFarm",
    description:
      "A video game where players build and maange a virtual farm, released as a spinoff of SimCity in 1993.",
    year: 1995,
    themes: [Theme.Farming],
    platforms: [Platform.PC, Platform.Mac],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/sim-farm-204",
        name: Store.AbandonWare,
      },
      {
        url: "https://en.wikipedia.org/wiki/SimFarm",
        name: "Wikipedia",
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.Free],
  },
  {
    title: "SimHealth",
    description:
      "A management simulation published in 1994 by Maxis to simulate the US health care system. Developed by Thinking Tools. Interface inspired by Simcity 2000",
    year: 1994,
    themes: [Theme.GeneralBusiness],
    platforms: [Platform.DOS],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://en.wikipedia.org/wiki/SimHealth",
        name: "Wikipedia",
      },
      {
        url: "https://www.myabandonware.com/game/simhealth-2am",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
  },
  {
    title: "Smart Factory Tycoon",
    description:
      "Smart Factory Tycoon inspired by Little Big Workshop is a tycoon management game about running your dream factory with robots. Design your dream factory, plan all steps of production, research new technologies and become a tycoon!",
    year: 2022,
    themes: [Theme.FactoryLayout, Theme.ProductDevelopment, Theme.Hardware],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1755300/Smart_Factory_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Sim Companies",
    description:
      "Sim Companies is a slow paced multiplayer economy simulation game. You can build your business from ground up and trade with others.",
    year: 2019,
    themes: [Theme.GeneralBusiness],
    platforms: [Platform.Browser],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://www.simcompanies.com/",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.Free],
    hasMultiplayer: true,
  },
  {
    title: "Sid Meier's Railroads!",
    description:
      "Sid Meier's Railroads! marks the return of the watershed title in simulation/strategy gaming that launched the popular 'tycoon' genre, and inspired a new generation of games. Sid Meier's Railroads!",
    year: 2006,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/7600/Sid_Meiers_Railroads/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
    sequelFamily: "railroadTycoon",
  },
  {
    title: "Skingdom",
    description:
      "Create your own ski realm in Skingdom, a ski resort construction and management game! Arrange your resort, draw your slopes and build your lifts, hotels and shops. Take care of your budget, hire staff and invest in upgrades for your ski resort to reach the top of the mountain!",
    releaseDate: "TBA",
    year: 2025,
    themes: [Theme.SnowSki],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/3244160/Skingdom/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.NotSet],
  },
  {
    title: "Soda Story - Brewing Tycoon";
    description: "Take on the challenge of running a Soda brewing operation, all while participating in the current season of the hit reality TV show 'Prisoneers'. Will you win your freedom?"
    year: 2022,
    themes: [Theme.Brewery, Theme.FactoryLayout, Theme.Prison];
    platforms: [Platform.PC];
    stores: [Store.Steam];
    links: [
      {
        url: "https://store.steampowered.com/app/1088750/Soda_Story__Brewing_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D];
    pricing: [Pricing.MoreThan10LessThan30]; 
  }
];
