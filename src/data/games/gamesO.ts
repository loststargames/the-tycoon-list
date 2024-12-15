import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesO: Game[] = [
  {
    title: "Omerta - City of Gangsters",
    description:
      "Omerta - City of Gangsters is a simulation game with tactical turn-based combat. Taking the role of a fresh-from-the-boat immigrant, with dreams of the big life, the player will work his way up the criminal hierarchy of 1920’s Atlantic City.",
    year: 2013,
    themes: [Theme.CrimeGangsters, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/208520/Omerta__City_of_Gangsters/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "OpenTTD",
    description:
      "OpenTTD is a business simulation game in which players earn money by transporting passengers and cargo via road, rail, water, and air. It is an open-source remake and expansion of the 1995 Chris Sawyer video game Transport Tycoon Deluxe.",
    year: 2004,
    themes: [Theme.Transportation, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1536610/OpenTTD/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
  },
];
