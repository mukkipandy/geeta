import React from 'react';
import { Text, View } from 'react-native';
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
      style={{
        flex: 1,
        backgroundColor: tokens.card,
        borderRadius: 16,
        overflow: 'hidden'
      }}
    >
      <View style={{ flex: 1 }}>
        <AnimatedBackground tag={verse.animation_tag} intensity={animationIntensity} />
      </View>

      <View style={{ flex: 1, padding: 16, gap: 10 }}>
        <Text style={{ fontSize: 20, color: tokens.textPrimary }}>{verse.original_text}</Text>
        <Text style={{ fontSize: 15, color: tokens.textSecondary }}>{verse.translation_english}</Text>
        <Text style={{ fontSize: 15, color: tokens.textSecondary }}>
          {verse.translations[selectedLanguage] ?? verse.translation_english}
        </Text>
        <Text style={{ fontSize: 13, color: tokens.textSecondary }}>
          {verse.book_name} {verse.chapter}:{verse.verse_number}
        </Text>
      </View>
    </View>
  );
}
