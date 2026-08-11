import React from "react";
import { Header } from "./components/Header";
import { FiltersBar } from "./components/FiltersBar";
import { GamesList } from "./components/GamesList";
import { ThemeProvider } from "./ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Promo } from "./components/Promo";
import { Contribute } from "./components/Contribute";
import { BestGames } from "./components/BestGames";
import { RandomGame } from "./components/RandomGame";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans bg-white dark:bg-zinc-950 dark:text-white">
        <Header />
        <Contribute />
        <FiltersBar />
        <Tabs defaultValue="gamesList">
          <div className="flex items-center m-4">
            <TabsList>
              <TabsTrigger value="gamesList" className="text-base">
                Games List
              </TabsTrigger>
              <TabsTrigger value="bestGames" className="text-base">
                Best Tycoon Games
              </TabsTrigger>
              <TabsTrigger value="randomGame" className="text-base">
                Random Game
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="gamesList">
            <GamesList />
          </TabsContent>
          <TabsContent value="bestGames">
            <BestGames />
          </TabsContent>
          <TabsContent value="randomGame">
            <RandomGame />
          </TabsContent>
        </Tabs>
        <Promo />
        <footer className="p-4 text-center text-sm bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 mt-4">
          The Tycoon List -
          <a
            href="https://github.com/loststargames/the-tycoon-list"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            GitHub
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
};
