import React, { useEffect, useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DailyVerseCard } from '../components/DailyVerseCard';
import { AudioPlayer } from '../components/AudioPlayer';
import { sampleVerses } from '../content/sampleVerses';
import { selectDailyVerse } from '../content/selectDailyVerse';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function DailyCardScreen() {
  const { tokens } = useAppTheme();
  const { preferences, addHistoryEntry } = useUserPreferencesStore();

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

  useEffect(() => {
    const day = todayISO.slice(0, 10);
    const alreadyLogged = preferences.history.some((item) => item.date.slice(0, 10) === day && item.verse_id === verse.verse_id);
    if (!alreadyLogged) {
      addHistoryEntry({ verse_id: verse.verse_id, date: todayISO, completed: false });
    }
  }, [addHistoryEntry, preferences.history, todayISO, verse.verse_id]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: tokens.background }]}>
      <View style={styles.container}>
        <Text style={[styles.meta, { color: tokens.textSecondary }]}>Daily Wisdom • {todayISO.slice(0, 10)} • {verse.source.toUpperCase()}</Text>

        <View style={styles.cardContainer}>
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

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 16, gap: 12 },
  meta: { fontSize: 12, fontWeight: '500' },
  cardContainer: { flex: 1 }
});
