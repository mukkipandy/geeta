import React, { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
    <ScrollView style={{ flex: 1, backgroundColor: tokens.background }} contentContainerStyle={{ padding: 16, gap: 10 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 24 }}>Archive (7-Day Preview)</Text>
      {cachedDays.map((entry) => (
        <View key={entry.date} style={{ backgroundColor: tokens.card, borderRadius: 12, padding: 12, gap: 4 }}>
          <Text style={{ color: tokens.textPrimary, fontSize: 14 }}>{entry.date}</Text>
          <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>
            {entry.verse.book_name} {entry.verse.chapter}:{entry.verse.verse_number}
          </Text>
          <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>{entry.verse.translation_english}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
