import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Verse } from '../types/models';
import { useAppTheme } from '../theme/ThemeProvider';
import { AnimatedBackground } from './AnimatedBackground';

interface DailyVerseCardProps {
  verse: Verse;
  selectedLanguage: string;
  animationIntensity: 'subtle' | 'medium' | 'off';
}

export function DailyVerseCard({
  verse,
  selectedLanguage,
  animationIntensity
}: DailyVerseCardProps) {
  const { tokens } = useAppTheme();

  return (
    <View
      accessibilityRole="summary"
      accessibilityLabel={`Verse from ${verse.book_name}`}
      style={[styles.card, { backgroundColor: tokens.card }]}
    >
      <View style={styles.topPane}>
        <AnimatedBackground tag={verse.animation_tag} intensity={animationIntensity} />
      </View>

      <View style={styles.bottomPane}>
        <Text style={[styles.original, { color: tokens.textPrimary }]}>{verse.original_text}</Text>
        <Text style={[styles.translation, { color: tokens.textSecondary }]}>{verse.translation_english}</Text>
        <Text style={[styles.translation, { color: tokens.textSecondary }]}>
          {verse.translations[selectedLanguage] ?? verse.translation_english}
        </Text>
        <Text style={[styles.meta, { color: tokens.textSecondary }]}>
          {verse.book_name} {verse.chapter}:{verse.verse_number}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden'
  },
  topPane: {
    flex: 1
  },
  bottomPane: {
    flex: 1,
    padding: 16,
    gap: 10
  },
  original: {
    fontSize: 20,
    lineHeight: 30
  },
  translation: {
    fontSize: 15,
    lineHeight: 22
  },
  meta: {
    fontSize: 13,
    marginTop: 4
  }
});
