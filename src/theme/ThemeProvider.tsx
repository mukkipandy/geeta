import React, { createContext, useContext, useMemo, useState } from 'react';
import { themeTokens, ThemeName } from './tokens';

interface ThemeContextValue {
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
  tokens: (typeof themeTokens)[ThemeName];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function AppThemeProvider({ children }: { children?: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  const value = useMemo(
    () => ({
      themeName,
      setThemeName,
      tokens: themeTokens[themeName]
    }),
    [themeName]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used within AppThemeProvider.');
  }
  return ctx;
}
