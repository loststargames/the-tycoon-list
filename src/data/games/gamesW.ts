import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesW: Game[] = [
  {
    title: "Wall Street Raider",
    description:
      "A sophisticated corporate finance and stock market simulation game, with its realistic mergers, tender offers, liquidations, LBOs, IPOs, greenmail, spin-offs, tax strategizing, and all the other tools of high corporate finance. All action occurs in a 'live action' economic environment, with a moving simulated stock ticker and scrolling news ticker. Sharpen your business I.Q. and your investing skills with this extraordinarily realistic and addictive simulator.",
    year: 1989,
    themes: [Theme.GeneralBusiness, Theme.Financial],
    platforms: [Platform.PC],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://www.wallstreetraider.com/simulation-games.html",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TextBased],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
