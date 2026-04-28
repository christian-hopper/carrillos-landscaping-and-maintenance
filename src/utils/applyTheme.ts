// src/utils/applyTheme.ts

import type { BusinessData } from "../data/business";

export function applyTheme(theme: BusinessData["theme"]) {
  const root = document.documentElement;

  root.style.setProperty("--color-primary", theme.colors.primary);
  root.style.setProperty("--color-primary-dark", theme.colors.primaryDark);
  root.style.setProperty("--color-accent", theme.colors.accent);
  root.style.setProperty("--color-bg", theme.colors.bg);
  root.style.setProperty("--color-text", theme.colors.text);
  root.style.setProperty("--color-dark-bg", theme.colors.darkBg);
  root.style.setProperty("--color-white", theme.colors.white);
  root.style.setProperty("--color-muted", theme.colors.muted);
  root.style.setProperty("--color-border", theme.colors.border);
}