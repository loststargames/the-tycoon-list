import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesA: Game[] = [
  {
    title: "Airport CEO",
    description:
      "Manage and expand your own airport, handle logistics, and grow your business.",
    year: 2021,
    themes: [Theme.Airport],
    platforms: [Platform.PC, Platform.Mac],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/673610/Airport_CEO/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Airline Tycoon Deluxe",
    description:
      "Airline Tycoon Deluxe is a funny economy simulation proceeding in realtime and assigning you the complete responsibility for an airline.",
    year: 1998,
    themes: [Theme.Airline],
    platforms: [Platform.PC, Platform.Mac],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/331920/Airline_Tycoon_Deluxe/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
    sequelFamily: "airline_tycoon",
  },
  {
    title: "Airline Tycoon 2",
    description:
      "Run a modern airline, design unique airplanes and grow a run-down carrier into a globally recognized company that passengers practically beg to fly.",
    year: 2011,
    themes: [Theme.Airline],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/201490/Airline_Tycoon_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
    sequelFamily: "airline_tycoon",
  },
  {
    title: "Arcade Tycoon",
    description:
      "Build stunning Arcade Centre’s, purchase a range of arcades machines, manage troublesome staff in this colourful and humorous simulation management game. Inspired by Two Point Hospital, Let's Build A Zoo and Megaquarium.",
    year: 2021,
    themes: [Theme.GameStore],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/750520/Arcade_Tycoon___Simulation_Game/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Arcade Empire Tycoon",
    description:
      "Build and manage your own arcade, attract customers, and grow your empire in Arcade Empire Tycoon!.",
    year: 2024,
    themes: [Theme.GameStore],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/3299460/Arcade_Empire_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "AirlineSim",
    description:
      "Manage and grow your own virtual airline in this business simulation. Plan operations by acquiring aircraft and scheduling flights. Monitor finances using realistic tools as you cooperate and compete with other players on a real-time market and turn your company into a flourishing business.",
    year: 2024,
    themes: [Theme.Airline],
    platforms: [Platform.PC, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2715810/AirlineSim/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.Free],
  },
  {
    title: "Airline Manager",
    description:
      "Create and manage your own airline. Create both passenger and cargo routes all over the world while you upgrade and expand your fleet of airplanes and airports. Airline Manager is among the most realistic of its genre - so prove yourself and beat your friends and other real life managers.",
    year: 2021,
    themes: [Theme.Airline],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1641650/Airline_Manager/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.Free],
  },
  {
    title: "Auto Dealership Tycoon",
    description:
      "Welcome to Auto Dealership Tycoon, own and operate your own car dealership. Watch your Customer Satisfaction Rating, if it sinks too low customers will stop coming! Special customers will visit your Dealership on occasion! Sometimes good, sometimes bad.",
    year: 2015,
    themes: [Theme.Automobile],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/393920/Auto_Dealership_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Automation - The Car Company Tycoon Game",
    description:
      "Make your dream cars a reality with Automation’s unparalleled car and engine design tools. Gain a competitive edge through smart engineering and business decisions to help you build an automotive empire. Will you become an industry leader, or just a footnote in automotive history?",
    year: 2015,
    themes: [Theme.Automobile],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/293760/Automation__The_Car_Company_Tycoon_Game/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Another Brick in The Mall",
    description:
      "Design, build and manage a giant shopping center. Open shops, supermarkets, restaurants, movie theaters, bowling alleys and more. Hire and manage the best staff for the job and milk your customers for all they're worth!",
    year: 2015,
    themes: [Theme.ShoppingCentre],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/521150/Another_Brick_in_The_Mall/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Ale Abbey",
    description:
      "Build and expand your monastery, craft recipes and brew holy ales in this unique brewery tycoon. No pre-made recipes in Ale Abbey, oh no. It's a canvas for true beer alchemists. It's as simple as: brew, sip, repeat. Welcome to Ale Abbey!",
    year: 2025,
    releaseDate: "TBA",
    themes: [Theme.Brewery],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2789460/Ale_Abbey/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.NotSet],
  },
  {
    title: "A-Train (1985)",
    description: "First in a long series of business simulation video games about trains. Released in December 1985 for the FM-7, NEC PC-8801, NEC PC-9801, X1 Turbo, MZ-2500, Famicom, and MSX2. The third game in the series (1990) was known as A-Train internationally, and A-Train III in Japan. (The 1985 version does not seem to be available online.)",
    year: 1985,
    themes: [Theme.Railroads, Theme.Transportation],
    platforms: [],
    stores: [],
    links: [
      {
        url: "https://en.wikipedia.org/wiki/A-Train",
        name: "Wikipedia"
      }
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
    sequelFamily: "A-Train",
  },
  {
    title: "A-Train (1990)",
    description: "The internationally distributed A-Train, known as A-Train III within Japan. Released 1992 for DOS. Also released for 	PC-9800, FM-Towns, X68000, Amiga, DOS, Macintosh, PlayStation, Super Famicom, Windows 95, Virtual Console. Isometric train company builder with business simulation including stock market and investments. Developer was Artdink, publisher is Maxis in North America and Ocean Software in EU.",
    year: 1990,
    themes: [Theme.Railroads, Theme.Transportation],
    platforms: [Platform.PC, Platform.Mac],
    stores: [],
    links: [
      {
        url: "https://www.myabandonware.com/game/a-train-1bn",
        name: Store.AbandonWare
      },
      {
        url: "https://en.wikipedia.org/wiki/A-Train_III",
        name: "Wikipedia"
      },
      {
        url: "https://www.macintoshrepository.org/4768-a-train",
        name: Store.AbandonWare
      },
      {
        url: "https://openretro.org/amiga/a-train",
        name: Store.AbandonWare
      }

    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
    sequelFamily: "A-Train",
  }
];
