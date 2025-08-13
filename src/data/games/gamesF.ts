import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesF: Game[] = [
  {
    title: "Farm Manager",
    description:
      "Farm Manager 2021 is an indie game that lets you relax and immerse yourself in farm management. A casual but grounded builder game that combines management and farm maintenance in one package. Grow and expand your farm into a thriving estate or enjoy it as a delightful escape from everyday life.",
    year: 2021,
    themes: [Theme.Farming],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1123830/Farm_Manager_2021/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Festival Tycoon",
    description:
      "A micro-management sim about music festivals! Design the perfect festival grounds in ‘create’ mode, then manage the event itself in ‘live’ mode! Book bands, sign deals, plant flowers, fix toilets, and grow your show into a global phenomenon.",
    year: 2022,
    themes: [Theme.Festival],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1326270/Festival_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Fantasy Zoo",
    description:
      "Fantasy Zoo is a thematic zoo builder where you build zoo for fantasy animals in a fantasy world. Fill the zoo with animals and monsters from mythology and fantasy pop culture. Manage and build the zoo with help of magic.",
    year: 2025,
    themes: [Theme.Zoo],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1951060/Fantasy_Zoo/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
];
