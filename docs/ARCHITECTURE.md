# App Architecture (React Native + TypeScript)

## State Management
- **Local UI + theme state:** React Context
- **Domain state (future):** Zustand store slices (`content`, `audio`, `preferences`, `sync`)
- **Persistence:** SQLite/Realm abstraction via repository interfaces

## Navigation
- Current: dependency-light route switcher in `AppNavigator` with clickable route chips.
- Provider composition root: `AppRoot` wraps theme + user-preferences stores around navigation.
- Planned Root Stack:
  - Onboarding
  - MainTabs
- Planned MainTabs:
  - DailyCard
  - Archive
  - Settings

## Layers
1. `screens/` – orchestration and composition
2. `components/` – reusable UI units
3. `content/` – verse selection, source mix, and prefetch cache selectors
4. `audio/` – session planning, TTS provider abstraction, ducking config
5. `preferences/` – shared user preference store + update actions
6. `data/` (future) – repositories for local/remote data
7. `theme/` – design tokens and provider

## Current Core Flows
- Daily card picks a deterministic verse from selected sources.
- Source-mix ratio is respected with weighted source selection.
- No-repeat window is enforced from user history with fallback when pool is exhausted.
- Seven-day cache helper precomputes deterministic verse cards for offline preparation.
- Daily screen header surfaces date/source context and shares current audio preference values.
- Archive screen uses deterministic 7-day cache generation from current preference state.
- Onboarding/settings update shared language/music preferences through a central store.

## Merge conflict resolution note
- Consolidated the branch state for the following files into one coherent baseline:
  - `README.md`
  - `docs/ARCHITECTURE.md`
  - `src/navigation/AppNavigator.tsx`
  - `src/screens/DailyCardScreen.tsx`

## Extension points
- Add a spiritual source by:
  1. Extending `SpiritualSource` union
  2. Supplying source fixtures in content DB
  3. Mapping source to `music_profile`
  4. Adding onboarding checkbox + ratio controls
- Add a new language by adding translation keys and exposing them in `LanguageSelector`.
- Swap audio backend by implementing runtime playback on top of `AudioPlayerService` + `TTSService`.
