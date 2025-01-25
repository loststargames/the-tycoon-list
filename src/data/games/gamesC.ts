import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesC: Game[] = [
  {
    title: "City Game Studio",
    description:
      "Manage a game studio from the dawn of the gaming industry in 1976. Your journey starts with small indie titles and grows into a gaming empire. Develop, design, and conquer the industry. From humble beginnings to gaming legend – it’s your story, your studio, your legacy!",
    year: 2021,
    themes: [Theme.GameDev],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam, Store.GOG],
    links: [
      {
        url: "https://store.steampowered.com/app/726840/City_Game_Studio/",
        name: Store.Steam,
      },
      {
        url: "https://www.gog.com/en/game/city_game_studio_a_tycoon_about_game_dev",
        name: Store.GOG,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Capitalism",
    description:
      "The aim of Capitalism is to become the most profitable business in the world while competing in several different markets against a number of different corporations.",
    year: 1995,
    themes: [Theme.GeneralBusiness, Theme.ProductDevelopment],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/450120/Capitalism_Plus/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Capitalism 2",
    description:
      "Create and control the business empire of your dreams. This in-depth strategy game covers almost every aspect of business that could be encountered in the real world.",
    year: 2001,
    themes: [Theme.GeneralBusiness, Theme.ProductDevelopment, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/638200/Capitalism_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Capitalism Lab",
    description:
      "Capitalism Lab is the successor to the award-winning Capitalism 2 business simulation game with tons of new features, offering an exciting journey into the world of big business!",
    year: 2013,
    themes: [Theme.GeneralBusiness, Theme.ProductDevelopment, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://www.capitalismlab.com/",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Casino Tycoon",
    description:
      "Run your own casino. Count money, tamper with slots, hire staff and crooked dealers. Buy new machines, tables, security cameras, and hire bodyguards to protect your interests.",
    year: undefined,
    releaseDate: "TBA",
    themes: [Theme.Casino],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/3004670/Casino_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.FirstPerson],
    pricing: [Pricing.NotSet],
  },
  {
    title: "Casino Inc.",
    description:
      "Classic strategy game from 2003. Run your own casino in the 1970s. It's classy. It's glitzy. It's all yours. Take a gamble. Start small with a slot machine or two. Employ some staff.",
    year: 2003,
    themes: [Theme.Casino],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/361320/Casino_Inc/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Chart Wars 3",
    description:
      "The game puts you in charge of your very own record company, you must hire bands, release and promote records, and arrange tours, all whilst balancing the books, expanding your label and competing with intelligent computer opponents.",
    year: 2003,
    themes: [Theme.Music, Theme.MusicLabel],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/chart-wars-3-43e",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.Free],
  },
  {
    title: "CD Market",
    description:
      "A music label simulation game, it's mostly text-based focused on simulation. Set in the 90's (CD's golden era). You will be able to manage your artists, handle contracts, scout new artists, make tours, market releases, increase hype, participate in awards, sell as many records as possible, and much more!",
    year: 2024,
    themes: [Theme.Music, Theme.MusicLabel],
    platforms: [Platform.iOS, Platform.Android],
    stores: [Store.AppStore, Store.PlayStore],
    links: [
      {
        url: "https://apps.apple.com/us/app/cd-market/id6670562960",
        name: Store.AppStore,
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.loststargames.cdmarket.android",
        name: Store.PlayStore,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Coffee Inc",
    description:
      "As a founder and CEO, your role is to start up your coffee shop, manage coffee bean blends, create the best coffee products, hire and motivate the best talents, conduct effective marketing, manage financials, expand the business to multiple cities and build the biggest coffee empire!",
    year: 2020,
    themes: [Theme.Coffee, Theme.CityView],
    platforms: [Platform.iOS],
    stores: [Store.AppStore],
    links: [
      {
        url: "https://apps.apple.com/us/app/coffee-inc-business-tycoon/id1455696607",
        name: Store.AppStore,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "coffeeInc",
  },
  {
    title: "Coffee Inc 2",
    description:
      "Welcome to The Coffee Inc 2: the next generation of The Coffee Inc, a popular business simulation game in the world.",
    year: 2022,
    themes: [Theme.Coffee, Theme.CityView],
    platforms: [Platform.iOS],
    stores: [Store.AppStore],
    links: [
      {
        url: "https://apps.apple.com/us/app/coffee-inc-2/id1573482724",
        name: Store.AppStore,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "coffeeInc",
  },
  {
    title: "Cities in Motion",
    description:
      "Manage transportation for commuters in four of the world's greatest cities - Vienna, Helsinki, Berlin, and Amsterdam",
    year: 2011,
    themes: [Theme.Transportation],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/73010/Cities_in_Motion/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "citiesInMotion",
  },
  {
    title: "Cities in Motion 2",
    description:
      "Cities in Motion 2 is the sequel to the popular mass transit simulation game Cities in Motion. Build, manage and lead your transportation network to provide cities with their ever changing needs. CIM2 introduces new features including multiplayer game modes, day and night cycles, timetables and dynamic cities.",
    year: 2013,
    themes: [Theme.Transportation],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/225420/Cities_in_Motion_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "citiesInMotion",
  },

  {
    title: "Cartel Tycoon",
    description:
      "Cartel Tycoon is a survival business sim inspired by the ‘80s and '90s narco trade. Expand and conquer, fight off rival thugs and evade the authorities. Earn people's loyalty and strive to overcome the doomed fate of a power-hungry drug lord.",
    year: 2022,
    themes: [Theme.CrimeGangsters],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1220140/Cartel_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Chef: A Restaurant Tycoon Game",
    description:
      "Chef is a Restaurant Management game in which you create your own character, acquire supreme cooking skills, customize restaurants, design unique menus, and devise innovative recipes with a realistic editor.",
    year: 2020,
    themes: [Theme.Restaurant],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/886900/Chef_A_Restaurant_Tycoon_Game/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Computer Tycoon",
    description:
      "Computer Tycoon is a fairly complex Business Grand Strategy game about Computer Evolution. Start in the 70s, invent until 2034, create the best computer systems, upgrade your infrastructure, lead a team, and alter computer history! It is time to 'Think Different'",
    year: 2022,
    themes: [Theme.Hardware],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/686680/Computer_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Car Manufacture",
    description:
      "Car Manufacture is an automotive tycoon game. Start in the beginning of the XX century and create thriving business. Build cars, manage people, expand your plant and research new technology. Make tons of money and stay on top.",
    year: 2024,
    themes: [Theme.Automobile],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/983380/Car_Manufacture/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "City of Gangsters",
    description:
      "In this management tycoon game, you’ll start a criminal operation from nothing and grow it into a well-oiled money machine! Build speakeasies and illegal distilleries. Manage production chains and resource distribution. Leverage favors, chase down debtors, and bribe the police to look the other way.",
    year: 2021,
    themes: [Theme.CrimeGangsters, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1386780/City_of_Gangsters/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Car Park Capital",
    description:
      "The car industry needs you to design and build the greatest car parks that simple town life hasn't seen before. Introduce the need for car commuting and turn neighborhoods into car parks! Use propaganda to convince people to pay you for it. Fight people that see through your oily business.",
    releaseDate: "TBA",
    year: undefined,
    themes: [Theme.Automobile, Theme.Parking],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/3031880/Car_Park_Capital/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.NotSet],
  },
  {
    title: "Corporation Inc.",
    description:
      "It's time to build the push-button company of your dreams. Corporation Inc is a game about building the best push-button corporation in the world. Create offices and hire workers to fill them. Push a profit and start researching new upgradeable and items. Hit your goals and get rewarded, it's like real life business management without the consequences!",
    year: 2010,
    themes: [Theme.Office],
    platforms: [Platform.Browser],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://armorgames.com/play/7348/corporation-inc",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.Free],
  },
];
