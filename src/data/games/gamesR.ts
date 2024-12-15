import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesR: Game[] = [
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
];
