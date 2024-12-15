import React from "react";
import { useTheme } from "../ThemeContext";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeStyle } from "../data/games/types";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(ThemeStyle.light)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(ThemeStyle.dark)}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(ThemeStyle.system)}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:bg-zinc-900 dark:border-zinc-700">
      <div className="flex items-center gap-2">
        <img src="./logo.svg" alt="Logo" className="h-8 w-auto" />
        <div>
          <h1 className="text-2xl font-bold">The Tycoon List</h1>
          <h1 className="text-sm font-medium">
            A collection of games with business simulation aspects.
          </h1>
        </div>
      </div>
      <ModeToggle />
    </header>
  );
};
