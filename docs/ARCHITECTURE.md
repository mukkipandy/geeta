# App Architecture (React Native + TypeScript)

## Runtime status
- Expo-enabled React Native app with Expo Go support.
- Navigation uses React Navigation stack + bottom tabs.
- User preferences persist locally with AsyncStorage.

## Navigation
- Root stack:
  - `Onboarding` (shown until completed)
  - `Main` tabs
- Main tabs:
  - `Daily`
  - `Archive`
  - `Settings`

## State management
- `AppThemeProvider`: visual theme tokens
- `UserPreferencesStore`:
  - source/language preferences
  - audio settings
  - theme preference
  - history data
  - onboarding completion state

## Domain layers
1. `content/`
   - deterministic PRNG + daily verse selector
   - source ratio weighting
   - no-repeat lookback logic
   - 7-day deterministic cache builder
2. `audio/`
   - session planning abstraction
   - ducking interpolation helper
   - TTS cache-key abstraction
3. `components/`
   - reusable card/player/selector UI
4. `screens/`
   - onboarding + daily + archive + settings

## Production-readiness progress
Implemented:
- Expo Go testing support
- persisted preferences
- improved UI consistency
- deterministic content engine

Pending:
- native audio playback runtime
- notifications
- offline DB repository layer
- backend sync + content operations
