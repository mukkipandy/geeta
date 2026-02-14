# Geeta - Cross-Platform Meditation & Daily Wisdom App

A React Native meditation and daily wisdom app designed to feel calm, reflective, and spiritually inclusive.

## Expo Go support (added)

This project now supports **Expo Go** testing.

- Start the Expo dev server:
  - `npm run expo` (or `npm start`)
- Open Expo Go on your phone and scan the QR code.

## Quick local run (Expo Go)

### 1) Prerequisites

- Node.js 18+
- npm 9+
- Expo Go app installed on your mobile device (Android/iOS)
- Same Wi-Fi network for computer and phone (or use tunnel mode)

### 2) Install dependencies

```bash
npm install
```

### 3) Type-check

```bash
npm run build
```

### 4) Start Expo

```bash
npm run expo
```

Then:
- Press `a` for Android emulator (if configured)
- Press `i` for iOS simulator (macOS)
- Press `w` for browser
- Or scan QR with Expo Go on physical phone

You can also start browser directly with:
```bash
npm run expo:web
```

## Alternate React Native CLI scripts (optional)

If you still want RN CLI commands:

- `npm run start:rn`
- `npm run android:rn`
- `npm run ios:rn`

> Note: Expo Go is the recommended testing path for this repository now.

## Implemented app features

- React Navigation stack + tabs (Onboarding, Daily, Archive, Settings)
- Persisted preferences via AsyncStorage
- Theme switching and persisted theme sync
- Deterministic daily verse selection with source mix ratio + no-repeat logic
- 7-day deterministic archive preview
- Improved UI polish across onboarding/settings/daily/archive
- Audio/TTS service scaffolding for next-phase runtime integration

## Current limitations (pending for full production)

- Native background audio queue/ducking runtime integration
- Notification scheduling
- Offline DB repository + backend sync pipeline
- Full content expansion and editorial review workflow
- Full accessibility audit/features
