import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesD: Game[] = [
  {
    title: "Disco Simulator",
    description:
      "Disco Simulator is a tycoon type game based on club management. Your task will be to set up the club from scratch, put up walls, arrange furniture, hire staff, plan events, invite artists, put on concerts. Create your own club!",
    year: 2024,
    themes: [Theme.Nightclub],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1226970/Disco_Simulator/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Dungeon Tycoon",
    description:
      "Build your own dungeon and attract heroes from all over the realm! Grow your business by exploiting every facet of your visitors' dungeon exploration experience. Will you be able to keep your evil dungeon business going?",
    year: 2024,
    themes: [Theme.Dungeon],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2400770/Dungeon_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
