"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const STORAGE_KEY = "ui-theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch (error) {
    console.warn("Failed to read theme from localStorage:", error);
  }
  return "system";
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    getSystemTheme()
  );

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Calculate the resolved theme
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  // Update theme
  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error);
    }
    setThemeState(newTheme);
  };

  return {
    theme,
    setTheme,
    resolvedTheme,
  };
}
