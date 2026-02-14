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

## Important: React Native CLI project (not Expo-managed)

This project is currently a **React Native CLI / bare workflow** app.

- ✅ You can run it on Android/iOS simulators/devices using native tooling.
- ❌ You cannot open this project directly in **Expo Go** in its current form.

If you specifically want Expo Go testing, we can migrate to an Expo-managed app structure in a follow-up change.

## Local setup and run instructions

### 1) Prerequisites

Install these first:

- Node.js 18+
- npm 9+
- Watchman (recommended on macOS)
- Android Studio + Android SDK + emulator (for Android)
- Xcode + CocoaPods (for iOS, macOS only)

Official RN environment setup guide:
- https://reactnative.dev/docs/environment-setup (choose **React Native CLI**)

### 2) Install dependencies

```bash
npm install
```

### 3) Validate TypeScript/build health

```bash
npm run build
```

### 4) Start Metro

```bash
npm run start
```

Keep this terminal running.

### 5) Run on Android (emulator or USB device)

In a second terminal:

```bash
npm run android
```

### 6) Run on iOS (macOS only)

In a second terminal:

```bash
npm run ios
```

## Testing on a physical mobile device

### Android physical device

1. Enable Developer Options + USB debugging on your phone.
2. Connect device via USB.
3. Confirm detection:

```bash
adb devices
```

4. Start Metro:

```bash
npm run start
```

5. Install/run app:

```bash
npm run android
```

### iPhone physical device (macOS)

1. Open the iOS project in Xcode.
2. Set your Team/signing profile.
3. Connect iPhone and trust computer.
4. Build/run from Xcode, with Metro running via:

```bash
npm run start
```

## Expo Go question (important)

- This repository is **not configured for Expo Go**.
- To test with Expo Go, project migration is needed (Expo config/app.json, Expo modules, navigation/runtime adjustments).

If you want, next I can provide:
1. a minimal Expo-managed migration path, or
2. a dual workflow strategy (RN CLI + Expo dev client).

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
