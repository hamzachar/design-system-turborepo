"use client";

import * as React from "react";
import { useTheme, type Theme } from "../../hooks/useTheme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const themeState = useTheme();

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
