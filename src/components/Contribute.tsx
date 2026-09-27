import React, { useState } from "react";
import { Button } from "./ui/button";
import { HelpingHand, MessageCircle, MessageSquarePlus, NotebookPen, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Contribute: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-3 my-3 flex flex-col gap-3 sm:mx-6 sm:my-6">
      <Button
        type="button"
        variant="default"
        className="flex w-full items-center sm:hidden"
        aria-expanded={open}
        aria-controls="add-game-actions"
        onClick={() => setOpen((value) => !value)}
      >
        <Plus className="mr-2" />
        Add a new game
      </Button>

      <div
        id="add-game-actions"
        className={cn(
          "flex-col gap-3 sm:flex sm:flex-row lg:justify-between",
          open ? "flex" : "hidden",
        )}
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="hidden items-center sm:flex">
            <MessageCircle />
            <p className="ml-2">
              Know a game that's missing?
            </p>
          </div>
          <a
            href="https://discord.gg/3BqYCxZfFT"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="default" className="flex w-full items-center sm:w-auto">
              <MessageSquarePlus className="mr-2" />
              <span className="sm:hidden">Suggest a game - Discord</span>
              <span className="hidden sm:inline">Suggest a game</span>
            </Button>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="hidden items-center sm:flex">
            <NotebookPen />
            <p className="ml-2">Want to add it yourself?</p>
          </div>
          <a
            href="https://github.com/loststargames/the-tycoon-list"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="default" className="flex w-full items-center sm:w-auto">
              <HelpingHand className="mr-2" /> Contribute on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
