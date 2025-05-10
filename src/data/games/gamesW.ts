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
  {
    title: "Wizdom Academy",
    description:
      "Build and manage your wizard academy as the headmaster. Recruit young students and guide their journey to become accomplished wizards. Control resources, customize your castle, and unlock tons of content. Start your legacy today!",
    year: 2025,
    themes: [Theme.UniversitySchool, Theme.AlternativeUniverse],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2668000/Wizdom_Academy/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "War for the Overworld",
    description:
      "Tired of invading dungeons? It's time you built your own! War for the Overworld is a Dungeon Management Game that employs your favourite aspects of the RTS and God Game genres. Carve out your Dungeon and conquer the Overworld!",
    year: 2015,
    themes: [Theme.Dungeon],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/230190/War_for_the_Overworld/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];
