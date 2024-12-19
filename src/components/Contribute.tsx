import React from "react";
import { Button } from "./ui/button";
import { HelpingHand, MessageCircle, NotebookPen, Users } from "lucide-react";

export const Contribute: React.FC = () => {
  return (
    <div className="flex flex-col lg:justify-between sm:flex-row ml-6 lg:mr-6 mt-6 mb-6 gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex items-center">
          <MessageCircle />
          <p className="ml-2">To discuss and coordinate about TTL!</p>
        </div>
        <a
          href="https://discord.gg/3BqYCxZfFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="flex items-center">
            <Users className="mr-2" /> Join Discord
          </Button>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex items-center">
          <NotebookPen />
          <p className="ml-2">
            Know any Tycoon game that's not here? Help by adding!
          </p>
        </div>
        <a
          href="https://github.com/loststargames/the-tycoon-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="flex items-center">
            <HelpingHand className="mr-2" /> Contribute on Github
          </Button>
        </a>
      </div>
    </div>
  );
};
