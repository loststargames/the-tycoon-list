import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Apple, Play } from "lucide-react";
import { Button } from "./ui/button";

export const Promo: React.FC = () => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-1 gap-4">
      <Alert>
        <div className="flex">
          <img
            src="/cd-market-logo.webp"
            alt="CD Market Logo"
            className="h-16 w-auto rounded-xl"
          />
          <div className="ml-4">
            <AlertTitle className="text-lg font-semibold">
              Check out my game, CD Market
            </AlertTitle>
            <AlertDescription className="font-medium">
              A music label simulation game set in the 90s for iOS and Android.
            </AlertDescription>
            <AlertDescription>
              <a href="https://x.com/cdmarketgame" target="_blank">
                https://x.com/cdmarketgame
              </a>
            </AlertDescription>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 ml-4 mt-2 sm:mt-0">
            <Button variant="outline" className="w-full sm:w-auto">
              <Apple className="mr-1" /> iOS
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Play className="mr-1" /> Android
            </Button>
          </div>
        </div>
      </Alert>
    </div>
  );
};
