import { createContext, useContext, useEffect, useState } from "react";
import { ThemeStyle } from "./data/games/types";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeStyle;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeStyle;
  setTheme: (theme: ThemeStyle) => void;
};

const initialState: ThemeProviderState = {
  theme: ThemeStyle.system,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = ThemeStyle.system,
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeStyle>(
    () => (localStorage.getItem(storageKey) as ThemeStyle) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeStyle.light, ThemeStyle.dark);

    if (theme === ThemeStyle.system) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? ThemeStyle.dark
        : ThemeStyle.light;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeStyle) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
