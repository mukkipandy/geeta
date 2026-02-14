# Geeta - Cross-Platform Meditation & Daily Wisdom App (Starter)

This repository contains a **TypeScript-first React Native starter architecture** for a spiritually inclusive daily wisdom app.

## Included in this starter

- App architecture and folder layout
- Core data models and sample content fixtures
- Deterministic daily verse selection algorithm with source mixing ratio + no-repeat window
- 7-day prefetch cache builder for offline daily verse preparation
- Calm UI scaffold for Daily Card, onboarding, and settings placeholders
- Audio service scaffolding for narration + ducking-aware music session planning
- Theme tokens and provider scaffolding for light/dark/pastel modes
- Conflict-safe consolidated navigation and daily-screen baseline

## Proposed folder structure

```text
src/
  audio/
    AudioPlayerService.ts
    TTSService.ts
  components/
    AnimatedBackground.tsx
    AudioPlayer.tsx
    DailyVerseCard.tsx
    LanguageSelector.tsx
    SourceMixer.tsx
  content/
    sampleVerses.ts
    seededRandom.ts
    selectDailyVerse.ts
    VerseCacheManager.ts
  navigation/
    AppNavigator.tsx
  screens/
    DailyCardScreen.tsx
    OnboardingFlow.tsx
    SettingsScreen.tsx
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

## Navigation state

- `AppNavigator` now includes an interactive in-memory route switcher for:
  - Onboarding
  - Daily Card
  - Settings
- This keeps the starter runnable without external navigation dependencies while preserving a realistic screen split.

## Next build steps

1. Wire React Navigation stack/tab flows
2. Integrate persistence (SQLite/Realm)
3. Add real audio playback engine (`react-native-track-player`) + OS background support
4. Replace placeholder visuals with Lottie/Rive loops
5. Expand content fixtures + translation packs + remote sync
