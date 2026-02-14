# Geeta - Cross-Platform Meditation & Daily Wisdom App (Starter)

This repository contains a **TypeScript-first React Native starter architecture** for a spiritually inclusive daily wisdom app.

## Included in this starter

- App architecture and folder layout
- Core data models and sample content fixtures
- Deterministic daily verse selection algorithm with source mixing ratio + no-repeat window
- A calm Daily Card UI scaffold (`DailyCardScreen`, `DailyVerseCard`, `AnimatedBackground`)
- Theme tokens and provider scaffolding for light/dark/pastel modes

## Proposed folder structure

```text
src/
  components/
    AnimatedBackground.tsx
    DailyVerseCard.tsx
  content/
    sampleVerses.ts
    seededRandom.ts
    selectDailyVerse.ts
  navigation/
    AppNavigator.tsx
  screens/
    DailyCardScreen.tsx
  theme/
    ThemeProvider.tsx
    tokens.ts
  types/
    external.d.ts
    models.ts
```

## Core algorithm behavior

`selectDailyVerse` implements:

1. Source filtering based on user preference
2. Weighted source selection via user ratios
3. Deterministic randomness using `userId + date` seed
4. No-repeat exclusion over a configurable lookback window (default 90 days)
5. Stable fallback behavior when ratios are missing/misaligned

## Next build steps

1. Integrate persistence (SQLite/Realm)
2. Add onboarding flow + settings
3. Plug audio engine (track player + TTS + ducking)
4. Add 7-day prefetch cache manager
5. Add archive/favorites and journaling
