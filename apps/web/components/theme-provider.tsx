"use client";

import { ThemeProvider as BaseThemeProvider } from "@repo/ui";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <BaseThemeProvider defaultTheme="system">{children}</BaseThemeProvider>
  );
}
