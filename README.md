# Geeta - Cross-Platform Meditation & Daily Wisdom App

A React Native meditation and daily wisdom app designed to feel calm, reflective, and spiritually inclusive.

## What is implemented now

- Runnable React Native app scaffold (Metro + app entry + Babel/TS setup)
- Real navigation stack using React Navigation:
  - Onboarding gate
  - Main tabs: Daily, Archive, Settings
- Shared user preference store with local persistence via AsyncStorage
- Theme synchronization from stored preferences (light/dark/pastel)
- Deterministic daily verse selection with weighted source mixing + no-repeat window
- Deterministic 7-day archive preview generation
- Enhanced UI polish across major screens/components:
  - Breathing-like animated background
  - Accessible buttons/chips
  - Structured cards and spacing
- Audio domain service scaffolding improved with ducking interpolation helper

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
- `npm run build` — build check (mapped to typecheck for now)
- `npm run start` — starts Metro
- `npm run android` — run Android app (requires Android SDK/emulator)
- `npm run ios` — run iOS app (requires macOS + Xcode)

## Quick start

1. `npm install`
2. `npm run build`
3. `npm run start`
4. In another terminal: `npm run android` or `npm run ios`

## Current limitations (still pending for full production)

- Audio playback UI is wired as UX scaffold; native playback queue/background audio integration is still pending
- Push notifications scheduler is pending
- Remote sync/content pipeline is pending
- Full 1200+ verse dataset and editorial workflow are pending
- Expanded accessibility features (screen reader labels audit, dyslexic font option, high-contrast toggle) are pending

## Next priority steps

1. Integrate `react-native-track-player` with segmented session playback + ducking runtime
2. Add local DB (SQLite/Realm) and cache repositories
3. Add notification scheduling and time-zone-safe daily reminders
4. Expand content and translation packs with source-level quality checks
