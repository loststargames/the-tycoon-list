export enum Theme {
  Airline = "Airline",
  Airport = "Airport",
  AlternativeUniverse = "Alternative Universe",
  Automobile = "Automobile",
  Brewery = "Brewery",
  Casino = "Casino",
  CityBuilder = "City Builder",
  CityView = "City View",
  Coffee = "Coffee",
  Colonization = "Colonization",
  CrimeGangsters = "Crime/Gangsters",
  Dungeon = "Dungeon",
  EmergencyServices = "Emergency Services",
  Esports = "Esports",
  StreamerYoutuber = "Streamer / Youtuber",
  FactoryLayout = "Factory Layout",
  Farming = "Farming",
  FastFood = "Fast Food",
  Festival = "Festival",
  Financial = "Financial",
  GameDev = "Game Dev",
  GameStore = "Game Store",
  GeneralBusiness = "General Business",
  OilPetrol = "Oil / Petrol",
  Hardware = "Hardware",
  Hospital = "Hospital",
  Hotel = "Hotel",
  Humour = "Humour",
  Industry = "Industry",
  Movies = "Movies",
  Museum = "Museum",
  Music = "Music",
  MusicArtist = "Music Artist",
  MusicLabel = "Music Label",
  NewsTabloid = "News / Tabloid",
  Nightclub = "Nightclub",
  NSFW = "NSFW",
  Office = "Office",
  Pharmaceutical = "Pharmaceutical",
  Police = "Police",
  Prison = "Prison",
  ProductDevelopment = "Product Development",
  PropertyRentals = "Property / Rentals",
  Railroads = "Railroads",
  Restaurant = "Restaurant",
  Retail = "Retail",
  ShoppingCentre = "Shopping Centre / Mall",
  Software = "Software",
  Space = "Space",
  Spaceship = "Spaceship",
  Startup = "Startup",
  ThemePark = "Theme Park",
  Transportation = "Transportation",
  TV = "TV",
  UniversitySchool = "University / School",
  Winemaking = "Winemaking",
  Zoo = "Zoo",
  SnowSki = "Snow / Ski Resort",
}

export enum Platform {
  PC = "PC",
  Mac = "Mac",
  iOS = "iOS",
  Android = "Android",
  Linux = "Linux",
  Xbox = "Xbox",
  PlayStation = "PlayStation",
}

export enum Store {
  Steam = "Steam",
  GOG = "GOG",
  Itchio = "Itch.io",
  EpicGamesStore = "Epic Games Store",
  AppStore = "App Store",
  PlayStore = "Play Store",
  AbandonWare = "Abandon Ware",
  OwnWebsite = "Own Website",
  Browser = "Browser",
}

export enum GameplayType {
  TextBased = "Text-Based",
  FirstPerson = "First Person",
  ThirdPerson = "Third Person",
  TopDown2D = "Top Down 2D",
  TopDown3D = "Top Down 3D",
  Isometric = "Isometric",
  PointClick = "Point and Click",
  BuildingBlocks = "Building Blocks",
}

export enum Pricing {
  NotSet = "Not Set",
  Free = "Free",
  Freemium = "Freemium",
  LessThan10 = "Less Than $10",
  MoreThan10LessThan30 = "Between $10 and $30",
  MoreThan30 = "More Than $30",
}

export interface LinkInfo {
  url: string;
  name: Store | string;
}

export interface Game {
  title: string;
  description: string;
  year: number | undefined;
  themes: Theme[];
  releaseDate?: string | "TBA";
  platforms: Platform[];
  stores: Store[];
  links: LinkInfo[];
  gameplayType: GameplayType[];
  pricing: Pricing[];
  sequelFamily?: string;
  hasMultiplayer?: boolean;
  ttlNote?: string;
}

export enum YearComparison {
  SAME = "same",
  BEFORE = "before",
  AFTER = "after",
}

export enum ThemeStyle {
  dark = "dark",
  light = "light",
  system = "system",
}
