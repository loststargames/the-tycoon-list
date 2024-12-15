# The Tycoon List

An open-source list of Tycoon games.

### Why?

"The Tycoon List" exists to make it easier to find tycoon games in a landscape crowded with all kinds of genres. It's an open, community-driven index where tycoon enthusiasts can filter, search, and discover new games. The goal is to create a collaborative resource that highlights the unique appeal of tycoon games while making them more accessible to everyone.

## Visit the website:

### https://loststargames.github.io/the-tycoon-list/

---

Join the discord to coordinate about TTL https://discord.gg/3BqYCxZfFT

## How to Contribute

### There are two ways.

- One is through discord server. At the #games-to-add channel. Write it there and it will get added at some point.
- The other one is contributing directly. Following the next steps:

You can find all the games in:
`src/data/games`

Go to the file that has the letter the game starts with, for example: "F"
`gamesF.ts`

Add a new game to the array with:

```
{
title: string; // Game title
description: string; // Description of the game, not too long, not too short
year: number | undefined; // Year, it can be the number eg 2010 or undefined which goes for unreleased games
themes: Theme[]; // Choose from Theme in src/data/games/types.ts, if one is missing you can add it
releaseDate?: string | "TBA";
platforms: Platform[]; // Platforms supported by the game, eg. PC, Mac...
stores: Store[]; // choose one from Store
links: LinkInfo[]; // url and Store name or a custom name, preferably use Store names
gameplayType: GameplayType[];
pricing: Pricing[]; // choose one from Pricing
sequelFamily?: string; // if the game has sequels, name it the same, for example "industryGiant", they all have the same property
hasMultiplayer?: boolean; // optional, just include if the game actually has multiplayer
}
```

Do a Pull Request with the changes
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#propose-changes-to-someone-elses-project

### Run in Local

You need a node environment set-up.
Clone the project. Run `yarn` to install packages and `yarn dev` to run the app.

## Things that could be added

- Images and videos for each game, images could be hosted here https://imgbox.com/
- API integrations? Would need research
