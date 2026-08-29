import React from "react";
import { Button } from "./ui/button";
import { HelpingHand, MessageCircle, NotebookPen, Users } from "lucide-react";

export const Contribute: React.FC = () => {
  return (
    <div className="mx-3 my-3 flex flex-col gap-3 sm:mx-6 sm:my-6 sm:flex-row lg:justify-between">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="hidden items-center sm:flex">
          <MessageCircle />
          <p className="ml-2">
            To discuss, coordinate and propose games for TTL!
          </p>
        </div>
        <a
          href="https://discord.gg/3BqYCxZfFT"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button variant="default" className="flex w-full items-center sm:w-auto">
            <Users className="mr-2" /> Join Discord
          </Button>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="hidden items-center sm:flex">
          <NotebookPen />
          <p className="ml-2">
            Know any Tycoon game that's not here? Help by adding!
          </p>
        </div>
        <a
          href="https://github.com/loststargames/the-tycoon-list"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button variant="default" className="flex w-full items-center sm:w-auto">
            <HelpingHand className="mr-2" /> Contribute on Github
          </Button>
        </a>
      </div>
    </div>
  );
};
