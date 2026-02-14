import React, { useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { DailyVerseCard } from '../components/DailyVerseCard';
import { AudioPlayer } from '../components/AudioPlayer';
import { sampleVerses } from '../content/sampleVerses';
import { selectDailyVerse } from '../content/selectDailyVerse';
import { useAppTheme } from '../theme/ThemeProvider';
import { UserPreferences } from '../types/models';

const demoUser: UserPreferences = {
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

export function DailyCardScreen() {
  const { tokens } = useAppTheme();

  const todayISO = useMemo(() => new Date().toISOString(), []);

  const verse = useMemo(
    () =>
      selectDailyVerse({
        user: demoUser,
        date: todayISO,
        verses: sampleVerses
      }),
    [todayISO]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.background }}>
      <View style={{ flex: 1, padding: 16, gap: 12 }}>
        <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>
          Daily Wisdom • {todayISO.slice(0, 10)} • {verse.source.toUpperCase()}
        </Text>
        <View style={{ flex: 1 }}>
          <DailyVerseCard verse={verse} selectedLanguage={demoUser.preferred_language} animationIntensity="subtle" />
        </View>
        <AudioPlayer
          isPlaying={false}
          speed={demoUser.voice_settings.speed}
          narrationVolume={1}
          musicVolume={demoUser.music_settings.volume / 100}
        />
      </View>
    </SafeAreaView>
  );
}
