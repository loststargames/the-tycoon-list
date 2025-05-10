import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesH: Game[] = [
  {
    title: "Hardware Tycoon",
    description:
      "Hardware Tycoon is a free simulation/management game where you run your own hardware company, influence the market, and compete with other companies - either only to stay afloat or revolutionize the industry.",
    year: 2021,
    themes: [Theme.Hardware],
    platforms: [Platform.PC],
    stores: [Store.Itchio],
    links: [
      {
        url: "https://haxor1337.itch.io/hardware-tycoon",
        name: Store.Itchio,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
  },
  {
    title: "Hospital Tycoon",
    description:
      "Develop your own hospital drama and manipulate the results to your best advantage! In charge of a rapidly expanding hospital, your job is to cure the patients with your army of doctors and nurses while successfully managing the facilities and taking care of everyone's needs.",
    year: 2007,
    themes: [Theme.Hospital],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/11590/Hospital_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Hotel Magnate",
    description:
      "Have you ever wanted to design and manage your own hotel, rundown motel, or elegant resort? With a ridiculous amount of customization tools to wield, a host of facilities to build, and a wide variety of guests to impress, Hotel Magnate has it all. Let your inner hotel manager shine!",
    year: 2021,
    themes: [Theme.Hotel],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/832360/Hotel_Magnate/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Hundred Days - Winemaking Simulator",
    description:
      "Winemaking could be your best adventure. Make the best wine interacting with soil and nature and take your winery to the top. Your beautiful journey into the winemaking tradition starts now.",
    year: 2021,
    themes: [Theme.Winemaking],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1042380/Hundred_Days__Winemaking_Simulator/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "High Seas, High Profits!",
    description:
      "Live your medieval trader life! Buy low, sell high and explore the world! Buy ships, build businesses, find or train captains. Deal with pirates, manipulate mayors and challenge traders. React to hundreds of events that shape your very own procedurally-generated world!",
    year: 2025,
    themes: [Theme.SeaPirates, Theme.GeneralBusiness, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2828490/High_Seas_High_Profits/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Hollywood Animal",
    description:
      "Make your dreams come true — or crush someone else’s. Take the helm of a major Hollywood studio at the dawn of sound cinema, and guide it through decades of creative achievements and glamor, debauchery and dark deeds, tough choices and unpleasant compromises.",
    releaseDate: "10-04-2025",
    year: 2025,
    themes: [Theme.Movies, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2680550/Hollywood_Animal/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.NotSet],
  },
  {
    title: "Hotel Architect",
    description:
      "Step into the chaotic 24/7 lifestyle of a hotel owner as you design and build grand hotels across the globe. Juggle the increasingly elaborate demands of disorderly guests, logistical nightmares and unexpected obstacles in Hotel Architect, the ultimate hotel construction and tycoon management game.",
    releaseDate: "TBA",
    year: 2025,
    themes: [Theme.Hotel],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1602000/Hotel_Architect/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.NotSet],
  },
];
