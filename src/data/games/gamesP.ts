import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesP: Game[] = [
  {
    title: "Police Simulator",
    description:
      "Police Simulator is a single player resource management game that aims to combine simulation and real-time strategy. The player starts with control over a small part of the city and begins by recruiting officers and buying police cars for their police station.",
    year: 2010,
    themes: [Theme.Police, Theme.EmergencyServices, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://www.mobygames.com/game/66144/police-simulator/",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Pizza Connection",
    description:
      "Make quick dough in spite of ruthless competition, crooked authorities and greedy gangsters. Pizza Tycoon is a humorous business strategy game that challenges you to build a pizza empire from scratch. Try this spicy slice of the pizza-making business.",
    year: 1994,
    themes: [
      Theme.Restaurant,
      Theme.FastFood,
      Theme.CrimeGangsters,
      Theme.Humour,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam, Store.GOG],
    links: [
      {
        url: "https://store.steampowered.com/app/598990/Pizza_Connection/",
        name: Store.Steam,
      },
      {
        url: "https://www.gog.com/en/game/pizza_connection",
        name: Store.GOG,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
    sequelFamily: "pizzaConnection",
  },
  {
    title: "Pizza Connection 2",
    description:
      "It's your empire... Take control! The game has it all! the depth of gameplay will have you on the edge of your seat for hours on-end. Build, manage, strategize and conquer the competition with the richest gameplay tycoon product ever offered!",
    year: 2001,
    themes: [
      Theme.Restaurant,
      Theme.FastFood,
      Theme.CrimeGangsters,
      Theme.Humour,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/599000/Pizza_Connection_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "pizzaConnection",
  },
  {
    title: "Pizza Connection 3",
    description:
      "Mamma mia... Long awaited by fans around the world, the new installment of the cult series 'Pizza Connection' returns to the PC with even more flavour and extra cheese. Make em a pizza they can't refuse!",
    year: 2018,
    themes: [
      Theme.Restaurant,
      Theme.FastFood,
      Theme.CrimeGangsters,
      Theme.Humour,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/588160/Pizza_Connection_3/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "pizzaConnection",
  },
  {
    title: "Planet Coaster",
    description:
      "Planet Coaster® - the future of coaster park simulation games has arrived! Surprise, delight and thrill incredible crowds as you build your coaster park empire - let your imagination run wild, and share your success with the world.",
    year: 2016,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/493340/Planet_Coaster/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
  },
  {
    title: "Planet Coaster 2",
    description:
      "Build and customise thrilling roller coasters and incredible water slides, manage the ultimate theme park experience, and share your epic creations. Are you ready to ride the wave?",
    year: 2024,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2688950/Planet_Coaster_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
  },
  {
    title: "Prison Architect",
    description:
      "Only the world’s most ruthless Warden can contain the world’s most ruthless inmates. Design and develop your personalized penitentiary in Prison Architect.",
    year: 2015,
    themes: [Theme.Prison],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/233450/Prison_Architect/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "prisonArchitect",
  },
  {
    title: "Prison Architect 2",
    description:
      "Welcome Architects! Design and develop your own personalized penitentiary in Prison Architect 2. The classic prison-builder has broken out into 3D, and it’s up to you to contain it!",
    year: undefined,
    releaseDate: "TBA",
    themes: [Theme.Prison],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1257610/Prison_Architect_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.NotSet],
    sequelFamily: "prisonArchitect",
  },
  {
    title: "Planet Zoo",
    description:
      "Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo sim. Construct detailed habitats, manage your zoo, and meet authentic living animals who think, feel and explore the world you create around them.",
    year: 2019,
    themes: [Theme.Zoo],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/703080/Planet_Zoo",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
  },
  {
    title: "Plutocracy",
    description:
      "The business simulator Plutocracy gives you the chance to become wealthy and powerful to take control over the world. Where policy, laws, officials and people are only the chess pieces how do you play your game?",
    year: 2019,
    themes: [Theme.Industry, Theme.GeneralBusiness, Theme.OilPetrol],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/754500/Plutocracy/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Production Line: Car factory simulation",
    description:
      "Production line is the new car factory management/simulation/tycoon game that pushes your organisational and entrepreneurship skills to the limit. Can you build the ultimate optimised, free-flowing car production line whilst beating the competition and still turn a profit?",
    year: 2019,
    themes: [Theme.Automobile, Theme.FactoryLayout],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/591370/Production_Line__Car_factory_simulation/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Project Highrise",
    description:
      "Project Highrise is a skyscraper construction and management sim...",
    year: 2016,
    themes: [Theme.Office, Theme.Retail, Theme.GeneralBusiness],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/423580/Project_Highrise/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Puffin Planes",
    description:
      "A casual airline management game set on Earth and Mars. Supports singleplayer and Steam co-op.",
    year: 2024,
    themes: [Theme.Airline],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2897240/Puffin_Planes",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.LessThan10],
  },
];
