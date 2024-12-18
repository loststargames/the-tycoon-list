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
  {
    title: "Over the Counter",
    description: "A pharmaceutical business management game.",
    year: 2022,
    themes: [Theme.Pharmaceutical],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1626460/Over_the_Counter/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
  },
  {
    title: "Office Management 101",
    description:
      "Office Management 101 is a satirical office life simulation tycoon game set in a fictional capitalistic dystopia. Step over competitors, drive your staff to the limit and milk your customers for every penny in the pursuit of spiraling success!",
    year: 2022,
    themes: [Theme.Office, Theme.ProductDevelopment],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/678390/Office_Management_101/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
    ttlNote: "WARNING: Abandoned Game",
  },
  {
    title: "Octohill Ski Tycoon",
    description:
      "Octohill is a casual game about building and managing your own ski resort. Mark ski trails, connect them with lifts and watch your snowmobiles rushing to rescue those daring skiers who went a little too far.",
    releaseDate: "TBA",
    year: 2025,
    themes: [Theme.SnowSki],
    platforms: [Platform.PC],
    stores: [Store.Steam, Store.Itchio],
    links: [
      {
        url: "https://store.steampowered.com/app/3302160/Octohill_Ski_Tycoon/",
        name: Store.Steam,
      },
      {
        url: "https://deuxb.itch.io/octohill",
        name: Store.Itchio,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
];
