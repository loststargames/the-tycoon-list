import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesL: Game[] = [
  {
    title: "Lula: The Sexy Empire",
    description:
      "It's your dream. You're the boss of an international erotica group with film and sound studios, a casting office, marketing department etc! But everyone has to begin at the bottom. So you start up with your attractive girlfriend in a sleepy little town in the desert. But as if that's not enough: You're almost broke and the FBI is after you, too. It's up to you to make the most of your exciting new career as a producer of erotica.",
    year: 1998,
    themes: [Theme.NSFW],
    platforms: [Platform.PC],
    stores: [Store.GOG],
    links: [
      {
        url: "https://www.gog.com/en/game/lula_the_sexy_empire",
        name: Store.GOG,
      },
    ],
    gameplayType: [GameplayType.PointClick],
    pricing: [Pricing.LessThan10],
  },
];
