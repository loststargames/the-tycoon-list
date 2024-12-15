import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesT: Game[] = [
  {
    title: "Two Point Campus",
    description:
      "Build the university of your dreams with Two Point Campus, the sim with a twist from the makers of Two Point Hospital. Build, hire staff and run an academic institution packed with wild courses.",
    year: 2022,
    themes: [Theme.UniversitySchool],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1649080/Two_Point_Campus/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Two Point Museum",
    description:
      "Curate and manage incredible museums! Explore to discover amazing artifacts. Design and refine the layout, keep staff happy, guests entertained, donations plentiful… and children off the exhibits",
    year: 2025,
    releaseDate: "04-03-2025",
    themes: [Theme.Museum],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2185060/Two_Point_Museum/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Two Point Hospital",
    description:
      "Design stunning hospitals, cure peculiar illnesses and manage troublesome staff as you spread your budding healthcare organisation across Two Point County.",
    year: 2018,
    themes: [Theme.Hospital],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/535930/Two_Point_Hospital/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "This Is the Police",
    description:
      "This Is the Police is a strategy/adventure game set in a city spiraling the drain. Taking the role of gritty Police Chief Jack Boyd, you'll dive into a deep story of crime and intrigue. Will Jack reach his retirement with a nice stack of bills, or will he end up broken ... or worse?",
    year: 2016,
    themes: [Theme.Police, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/443810/This_Is_the_Police/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "thisIsThePolice",
  },
  {
    title: "This Is the Police 2",
    description:
      "Interpret the law as you see fit! Run the sheriff’s department, manage your cops, make tough decisions – and try to keep out of prison yourself – in this story-driven mixture of adventure, strategy, and turn-based tactical combat.",
    year: 2018,
    themes: [Theme.Police, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/785740/This_Is_the_Police_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
    sequelFamily: "thisIsThePolice",
  },
];
