import React, { createContext, useContext, useMemo, useState } from 'react';
import { UserPreferences } from '../types/models';

const defaultPreferences: UserPreferences = {
  user_id: 'demo-user',
  selected_sources: ['gita', 'quran', 'bible'],
  source_mixing_ratio: { gita: 50, quran: 30, bible: 20 },
  preferred_language: 'hindi',
  voice_settings: { gender: 'neutral', speed: 1 },
  music_settings: { enabled: true, volume: 50 },
  theme: 'light',
  notification_time: '07:00',
  current_streak: 0,
  total_verses_read: 0,
  favorite_verses: [],
  history: []
};

interface UserPreferencesStoreValue {
  preferences: UserPreferences;
  updatePreferredLanguage: (language: string) => void;
  updateMusicVolume: (volume: number) => void;
  addHistoryEntry: (entry: UserPreferences['history'][number]) => void;
}

const UserPreferencesContext = createContext<UserPreferencesStoreValue | undefined>(undefined);

export function UserPreferencesProvider({ children }: { children?: any }) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  const value = useMemo<UserPreferencesStoreValue>(
    () => ({
      preferences,
      updatePreferredLanguage: (language) => {
        setPreferences((prev) => ({ ...prev, preferred_language: language }));
      },
      updateMusicVolume: (volume) => {
        const bounded = Math.max(0, Math.min(100, Math.round(volume)));
        setPreferences((prev) => ({
          ...prev,
          music_settings: { ...prev.music_settings, volume: bounded }
        }));
      },
      addHistoryEntry: (entry) => {
        setPreferences((prev) => ({
          ...prev,
          history: [entry, ...prev.history].slice(0, 365),
          total_verses_read: prev.total_verses_read + (entry.completed ? 1 : 0)
        }));
      }
    }),
    [preferences]
  );

  return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
}

export function useUserPreferencesStore(): UserPreferencesStoreValue {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error('useUserPreferencesStore must be used within UserPreferencesProvider.');
  }

  return context;
}
