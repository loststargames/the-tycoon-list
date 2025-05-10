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
  {
    title: "Tycoon City: New York",
    description:
      "Description: Here's your chance to make it big in the Big Apple... New York City, the city that never sleeps! Go for broke building your own Manhattan empire, creating and customizing over 100 types of major businesses: run a hot nightclub, oversee a media conglomerate, open a lucrative Broadway theater - the choices are endless.",
    year: 2006,
    themes: [
      Theme.GeneralBusiness,
      Theme.Retail,
      Theme.Restaurant,
      Theme.CityView,
    ],
    platforms: [Platform.PC],
    stores: [Store.Steam, Store.AbandonWare],
    links: [
      {
        url: "https://store.steampowered.com/app/9730/Tycoon_City_New_York/",
        name: Store.Steam,
      },
      {
        url: "https://archive.org/details/Tycoon_City_New_York_Atari_25713CDA_2006",
        name: "Archive (added due to Steam broken version, not tested)",
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.Free],
    ttlNote:
      "WARNING: Steam version seems to be really broken. Game is good though... ",
  },
  {
    title: "Turmoil",
    description:
      "Drill for oil like it's 1899! Turmoil offers players a visually charming, tongue-in-cheek take on the simulation genre inspired by the 19th century oil rush in North America.",
    year: 2016,
    themes: [Theme.OilPetrol],
    platforms: [Platform.PC, Platform.Mac, Platform.Linux],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/361280/Turmoil/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "The Tenants",
    description:
      "Become a landlord and deal with problematic tenants as you build your rental property empire. Decide how to react to annoyed neighbors or police interventions. Will you design your apartment for a group of gamer friends or an aspiring musician looking for a new home?",
    year: 2021,
    themes: [Theme.PropertyRentals],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1009560/The_Tenants/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "TasteMaker",
    description:
      "TasteMaker is a restaurant tycoon game. Design your own restaurant from the ground up, decorate, create a menu, hire and manage staff, and much more. Keep your customers happy and make a profit to keep the restaurant of your dreams from turning into a nightmare.",
    year: 2023,
    themes: [Theme.Restaurant],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1289340/TasteMaker/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "The Invisible Hand",
    description:
      "Want to get rich, quick? Welcome to FERIOS, where you’ll be empowered to pursue wealth and success as a mid-level stockbroker! Your wildest dreams of wealth can come true… at the cost of everything else.",
    year: 2021,
    themes: [Theme.Financial],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/628200/The_Invisible_Hand/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.FirstPerson],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "The Movies",
    description:
      "The Movies allows players to run their own movie studio, including designing the studio itself and managing the careers of film stars. The game starts at the birth of cinema and continues into the future.",
    year: 2005,
    themes: [Theme.Movies],
    platforms: [Platform.PC],
    stores: [Store.AbandonWare],
    links: [
      {
        url: "https://www.myabandonware.com/game/the-movies-bcv",
        name: Store.AbandonWare,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.Free],
  },
  {
    title: "This Grand Life 2",
    description:
      "A money-focused life simulator. Create characters with allergies and addictions. Manage their lives through financial booms and busts. Advance their careers, start a small business, invest in real estate and stocks - or roleplay a penniless hobo.",
    year: 2024,
    themes: [Theme.LifeSim, Theme.CityView],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2459490/This_Grand_Life_2/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "The Executive - Movie Industry Tycoon",
    description:
      "Shape the history of the Hollywood movie industry in this sandbox business simulation game. Create the movies you've always wanted to see, hire the best team, research cutting-edge technologies, and dominate the Box Office. Can you rise from a small studio to a Hollywood giant?",
    year: 2025,
    themes: [Theme.Movies],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2315430/?utm_source=TycoonList",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Theme Hotel",
    description:
      "Build and manage your very own hotel. Keep guests happy and try to remain profitable as you strive to achieve a 5-star rating.",
    year: 2011,
    themes: [Theme.Hotel],
    platforms: [Platform.Browser],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://armorgames.com/play/12688/theme-hotel",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.Free],
  },
  {
    title: "The McDonald's Videogame",
    description:
      "Making money in a corporation like McDonald's is not easy! Behind every burger there is a complex process you need to master: from pastures to the slaughterhouse, from restaurants to branding. You'll discover all the dirty secrets that made us one of the biggest company in the world.",
    year: 2019,
    themes: [Theme.FastFood],
    platforms: [Platform.Browser, Platform.PC, Platform.Mac],
    stores: [Store.OwnWebsite],
    links: [
      {
        url: "https://www.molleindustria.org/mcdonalds/",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TopDown2D],
    pricing: [Pricing.Free],
  },
];
