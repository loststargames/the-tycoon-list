import React from "react";
import { Header } from "./components/Header";
import { FiltersBar } from "./components/FiltersBar";
import { GamesList } from "./components/GamesList";
import { ThemeProvider } from "./ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Promo } from "./components/Promo";
import { Contribute } from "./components/Contribute";
import { Button } from "./components/ui/button";
import { Users } from "lucide-react";

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
            </TabsList>
          </div>
          <TabsContent value="gamesList">
            <GamesList />
          </TabsContent>
          <TabsContent value="bestGames">
            <div className="flex m-8 my-16">
              <p className="text-lg">
                Soon... Join the editorial team on Discord!{" "}
              </p>
              <a
                href="https://discord.gg/3BqYCxZfFT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="ml-4 flex items-center">
                  <Users className="mr-2" /> Join Discord
                </Button>
              </a>
            </div>
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
