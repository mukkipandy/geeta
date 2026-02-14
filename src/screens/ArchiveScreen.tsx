import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { buildSevenDayVerseCache } from '../content/VerseCacheManager';
import { sampleVerses } from '../content/sampleVerses';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function ArchiveScreen() {
  const { preferences } = useUserPreferencesStore();
  const { tokens } = useAppTheme();

  const cachedDays = useMemo(
    () =>
      buildSevenDayVerseCache({
        startDateISO: new Date().toISOString(),
        user: preferences,
        verses: sampleVerses,
        days: 7
      }),
    [preferences]
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: tokens.background }} contentContainerStyle={styles.content}>
      <Text style={[styles.title, { color: tokens.textPrimary }]}>Archive Preview</Text>
      <Text style={[styles.subtitle, { color: tokens.textSecondary }]}>Deterministic 7-day schedule generated from your current source mix.</Text>

      {cachedDays.map((entry) => (
        <View key={entry.date} style={[styles.card, { backgroundColor: tokens.card }]}> 
          <Text style={[styles.date, { color: tokens.textPrimary }]}>{entry.date}</Text>
          <Text style={{ color: tokens.textSecondary }}>
            {entry.verse.book_name} {entry.verse.chapter}:{entry.verse.verse_number}
          </Text>
          <Text style={{ color: tokens.textSecondary }}>{entry.verse.translation_english}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 10 },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 13 },
  card: { borderRadius: 12, padding: 12, gap: 4 },
  date: { fontSize: 14, fontWeight: '600' }
});
