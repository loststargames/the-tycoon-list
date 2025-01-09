import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesR: Game[] = [
  {
    title: "Railroad Tycoon",
    description:
      "A series of business simulation games released in 1990, Railroad Tycoon Deluxe (1993), Railroad Tycoon II (1998), Railroad Tycoon 3 (2003) and Sid Meier's Railroads! (2006). Original version written by Sid Meier and published by Microprose.",
    year: 1990,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.DOS, Platform.Mac, Platform.PC, Platform.Linux],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://en.wikipedia.org/wiki/Railroad_Tycoon",
        name: "Wikipedia",
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.NotSet],
    sequelFamily: "railroadTycoon",
  },
  {
    title: "Railroad Tycoon 3",
    description:
      "Railroad Tycoon 3 features 25 scenarios challenging players to recreate magnificent feats of railroading history from around the world.",
    year: 2003,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/7610/Railroad_Tycoon_3/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
    sequelFamily: "railroadTycoon",
  },
  {
    title: "Rise of Industry",
    description:
      "Put your entrepreneurial skills to the test in the first title in the ROI series as you create & optimise intricate production lines. As an early 20th-Century industrialist, grow your empire & adapt to an ever-changing business landscape with unexpected events that could lead to boom…or bust.",
    year: 2019,
    themes: [Theme.Industry, Theme.Transportation, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/671440/Rise_of_Industry/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "RollerCoaster Tycoon",
    description:
      "One of the best games from acclaimed Tycoon series, with well designed gameplay mechanics, appealing graphics, and really high re-playability value. There’s no limit to what you can create so design and build the most thrilling roller coaster the world has ever seen!",
    year: 1999,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/285310/RollerCoaster_Tycoon_Deluxe/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "rollerCoasterTycoon",
  },
  {
    title: "RollerCoaster Tycoon Classic",
    description:
      "Create incredible parks in the original rollercoaster sim from Chris Sawyer.",
    year: 2017,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/683900/RollerCoaster_Tycoon_Classic/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "rollerCoasterTycoon",
  },
  {
    title: "RollerCoaster Tycoon 2",
    description:
      "This compilation includes the entire RollerCoaster Tycoon 2 series, with the original game as well as the Time Twister and Wacky Worlds expansions.",
    year: 2002,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/285330/RollerCoaster_Tycoon_2_Triple_Thrill_Pack/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
    sequelFamily: "rollerCoasterTycoon",
  },
  {
    title: "RollerCoaster Tycoon 3",
    description:
      "Build the park of a lifetime and rediscover the critically acclaimed rollercoaster simulation bestseller. Feel the thrill of a genre-defining classic, complete with two huge expansion packs.",
    year: 2020,
    themes: [Theme.ThemePark],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1368820/RollerCoaster_Tycoon_3_Complete_Edition/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "rollerCoasterTycoon",
  },
  {
    title: "Rock Tour",
    description:
      "The game puts you in charge of your very own record company, you must hire bands, release and promote records, and arrange tours, all whilst balancing the books, expanding your label and competing with intelligent computer opponents.",
    year: 2007,
    themes: [Theme.Music, Theme.MusicArtist],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/rock-tour-c4z",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.PointClick, GameplayType.TextBased],
    pricing: [Pricing.Free],
  },
  {
    title: "Recipe for Disaster",
    description:
      "Recipe for Disaster is a management sim that captures the fast-paced, drama-filled environment of a professional kitchen and dining room. Build your dream restaurant, create recipes, design menus and manage your staff, all while contending with demanding customers and disastrous situations!",
    year: 2022,
    themes: [Theme.Restaurant],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1492360/Recipe_for_Disaster/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Railway Empire",
    description:
      "In Railway Empire, you will create an elaborate and wide-ranging rail network, purchase over 40 different trains modelled in extraordinary detail, and buy or build railway stations, maintenance buildings, factories and tourist attractions to keep your travel network ahead of the competition.",
    year: 2018,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/503940/Railway_Empire/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "railwayEmpire",
  },
  {
    title: "Railway Empire 2",
    description:
      "Don the coat of a clever entrepreneur, take over a small railway company in the early 1800s and turn your steam engines into the workhorses of the economy. Grow your company into the largest railway company of the continent and outsmart your competitors.",
    year: 2023,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1644320/Railway_Empire_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "railwayEmpire",
  },
  {
    title: "Railroad Corporation",
    description:
      "Relive the pioneering spirit of the Golden Age of Steam by establishing your own railroad empire across 19th century North America. Bring settlements together, produce and trade goods and develop new technologies to stay ahead of the competition.",
    year: 2023,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/797400/Railroad_Corporation/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "railroadCorporation",
  },
  {
    title: "Railroad Corporation 2",
    description:
      "The 20th century heralds the new age of electrification for the railroad, and a new opportunity to make your fortune. Build your corporation carefully, as you deploy modern electric and diesel locomotives, lay new tracks, transport goods and passengers, and stay ahead of the competition.",
    year: 2024,
    themes: [Theme.Industry, Theme.Railroads],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1677970/Railroad_Corporation_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "railroadCorporation",
  },
];
