# App Architecture (React Native + TypeScript)

## State Management
- **Local UI + theme state:** React Context
- **Domain state (future):** Zustand store slices (`content`, `audio`, `preferences`, `sync`)
- **Persistence:** SQLite/Realm abstraction via repository interfaces

## Navigation
- Root Stack:
  - Onboarding
  - MainTabs
- MainTabs:
  - DailyCard
  - Archive
  - Settings

## Layers
1. `screens/` – orchestration and composition
2. `components/` – reusable UI units
3. `content/` – verse selection, source mix, caching selectors
4. `audio/` (future) – playback queue, ducking, TTS orchestration
5. `data/` (future) – repositories for local/remote data
6. `theme/` – design tokens and provider

## Extension points
- Add a spiritual source by:
  1. Extending `SpiritualSource` union
  2. Supplying source fixtures in content DB
  3. Mapping source to `music_profile`
  4. Adding onboarding checkbox + ratio controls
