import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesU: Game[] = [
  {
    title: "Under Par Golf Architect",
    description:
      "Step into the shoes of a golf architect as you build and manage your own golfing paradise! Sharpen your strategy by designing incredible courses to challenge the most demanding golfers and watch your club flourish as you attract VIP players, hire quirky staff and hold prestigious tournaments.",
    year: 2026,
    themes: [Theme.Golf],
    platforms: [Platform.PC, Platform.Mac],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2928410/Under_Par_Golf_Architect/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
