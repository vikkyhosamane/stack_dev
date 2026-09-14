"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  setTheme: (theme: Theme) => void;
}>({ setTheme: () => undefined });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const nextTheme = storedTheme ?? "light";

    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolvedTheme = theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [theme]);

  const handleSetTheme = (nextTheme: Theme) => {
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return <ThemeContext.Provider value={{ setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
