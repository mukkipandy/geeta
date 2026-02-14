import React, { useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { DailyVerseCard } from '../components/DailyVerseCard';
import { AudioPlayer } from '../components/AudioPlayer';
import { sampleVerses } from '../content/sampleVerses';
import { selectDailyVerse } from '../content/selectDailyVerse';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function DailyCardScreen() {
  const { tokens } = useAppTheme();
  const { preferences } = useUserPreferencesStore();

  const todayISO = useMemo(() => new Date().toISOString(), []);

  const verse = useMemo(
    () =>
      selectDailyVerse({
        user: preferences,
        date: todayISO,
        verses: sampleVerses
      }),
    [preferences, todayISO]
  );


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: tokens.background }}>
      <View style={{ flex: 1, padding: 16, gap: 12 }}>
        <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>
          Daily Wisdom • {todayISO.slice(0, 10)} • {verse.source.toUpperCase()}
        </Text>
        <View style={{ flex: 1 }}>
          <DailyVerseCard verse={verse} selectedLanguage={preferences.preferred_language} animationIntensity="subtle" />
        </View>
        <AudioPlayer
          isPlaying={false}
          speed={preferences.voice_settings.speed}
          narrationVolume={1}
          musicVolume={preferences.music_settings.volume / 100}
        />
      </View>
    </SafeAreaView>
  );
}
