import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesJ: Game[] = [
  {
    title: "John Deere: American Farmer",
    description:
      "John Deere: American Farmer is a farm construction and management simulation for Microsoft Windows featuring the John Deere license, developed by Gabriel Entertainment, published by Destineer Studios.",
    year: 2004,
    themes: [Theme.Farming],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/john-deere-american-farmer-deluxe-iov",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.Free],
  },
  {
    title: "Jurassic World Evolution",
    description:
      "Place yourself at the heart of the Jurassic franchise and build your own Jurassic World. Bioengineer dinosaurs that think, feel and react intelligently to the world around them and face threats posed by espionage, breakouts and devastating tropical storms in an uncertain world where life always finds a way.",
    year: 2018,
    themes: [Theme.ThemePark, Theme.AlternativeUniverse],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/648350/Jurassic_World_Evolution",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
    sequelFamily: "jurassicWorld",
  },
  {
    title: "Jurassic World Evolution 2",
    description:
      "Jurassic World Evolution 2 is the much-anticipated sequel to Frontier’s highly successful Jurassic World Evolution. This bold new era in the Jurassic World Evolution game franchise builds upon the ground-breaking and immersive 2018 management simulation.",
    year: 2021,
    themes: [Theme.ThemePark, Theme.AlternativeUniverse],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1244460/Jurassic_World_Evolution_2",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan30],
    sequelFamily: "jurassicWorld",
  },
];
