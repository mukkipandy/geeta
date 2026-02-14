export const themeTokens = {
  light: {
    background: '#FFFEF7',
    textPrimary: '#2C3E50',
    textSecondary: '#5C6B7A',
    card: '#FFFFFF',
    accent: '#FFD700',
    serenityA: '#E6E6FA',
    serenityB: '#C1E1C1'
  },
  dark: {
    background: '#1A1A2E',
    textPrimary: '#F5F5DC',
    textSecondary: '#D6D6C8',
    card: '#2C2C54',
    accent: '#C9A961',
    serenityA: '#2C2C54',
    serenityB: '#1B3A26'
  },
  pastel: {
    background: '#FFFFFA',
    textPrimary: '#2C3E50',
    textSecondary: '#5C6B7A',
    card: '#FFFFFF',
    accent: '#D4BAFF',
    serenityA: '#FFB3BA',
    serenityB: '#BAFFC9'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  typography: {
    title: 24,
    body: 16,
    caption: 13,
    scripture: 22
  }
} as const;

export type ThemeName = keyof Pick<typeof themeTokens, 'light' | 'dark' | 'pastel'>;
