# App Architecture (React Native + TypeScript)

## Runtime status
- Runnable React Native baseline with Metro/Babel and app registration.
- Navigation now uses React Navigation stack + bottom tabs.
- User preferences persist locally with AsyncStorage.

## Navigation
- Root stack:
  - `Onboarding` (shown until user completes onboarding)
  - `Main` tabs
- Main tabs:
  - `Daily`
  - `Archive`
  - `Settings`

## State management
- `AppThemeProvider`: current visual theme tokens
- `UserPreferencesStore`:
  - source and language preferences
  - audio settings
  - theme preference
  - history data
  - onboarding completion state
- Persisted keys:
  - `geeta.user.preferences.v1`
  - `geeta.user.onboarding.v1`

## Domain layers
1. `content/`
   - deterministic PRNG + daily verse selector
   - source ratio weighting
   - no-repeat lookback logic
   - 7-day deterministic cache builder
2. `audio/`
   - session planning abstraction
   - ducking configuration and interpolation helper
   - TTS cache-key abstraction
3. `components/`
   - reusable cards/selectors/player visuals
4. `screens/`
   - onboarding + daily + archive + settings journeys

## Production-readiness progress
Implemented:
- real navigation architecture
- persisted preferences
- improved UI consistency and accessibility annotations
- deterministic content behavior

Pending:
- native audio playback runtime
- notifications
- offline DB repository layer
- backend sync and larger content operations
