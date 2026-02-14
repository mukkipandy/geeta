# Geeta - Cross-Platform Meditation & Daily Wisdom App (Starter)

This repository now contains a **runnable React Native TypeScript scaffold** for a spiritually inclusive daily wisdom app.

## Included in this starter

- App architecture and folder layout
- Core data models and sample content fixtures
- Deterministic daily verse selection algorithm with source mixing ratio + no-repeat window
- 7-day prefetch cache builder for offline daily verse preparation
- Calm UI scaffold for Daily Card, onboarding, archive, and settings placeholders
- Audio service scaffolding for narration + ducking-aware music session planning
- Theme tokens and provider scaffolding for light/dark/pastel modes
- Shared user preference store wired across onboarding, daily, archive, and settings
- React Native runtime entry files and scripts (`index.js`, `App.tsx`, `app.json`, Metro/Babel config)

## Project structure

```text
src/
  AppRoot.tsx
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
    ArchiveScreen.tsx
    DailyCardScreen.tsx
    OnboardingFlow.tsx
    SettingsScreen.tsx
  preferences/
    UserPreferencesStore.tsx
  theme/
    ThemeProvider.tsx
    tokens.ts
  types/
    models.ts
```

## Scripts

- `npm run typecheck` — TypeScript validation
- `npm run build` — currently mapped to typecheck for this scaffold
- `npm run start` — starts Metro
- `npm run android` — attempts Android run (requires Android SDK/device)
- `npm run ios` — attempts iOS run (requires macOS + Xcode)

## Quick start

1. Install dependencies:
   - `npm install`
2. Validate types:
   - `npm run build`
3. Start Metro:
   - `npm run start`
4. Run app on device/simulator:
   - `npm run android` or `npm run ios`

## Core algorithm behavior

`selectDailyVerse` implements:

1. Source filtering based on user preference
2. Weighted source selection via user ratios
3. Deterministic randomness using `userId + date` seed
4. No-repeat exclusion over a configurable lookback window (default 90 days)
5. Stable fallback behavior when ratios are missing/misaligned

## Next build steps

1. Replace in-memory navigator with React Navigation stack/tab flows
2. Integrate persistence (SQLite/Realm)
3. Add real audio playback engine (`react-native-track-player`) + OS background support
4. Replace placeholder visuals with Lottie/Rive loops
5. Expand content fixtures + translation packs + remote sync
