import React from 'react';
import { Text, View } from 'react-native';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useAppTheme } from '../theme/ThemeProvider';

export function OnboardingFlow() {
  const { tokens } = useAppTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: tokens.background, gap: 12 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 24 }}>Welcome</Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 14 }}>
        Set your daily wisdom preferences in a calm, reflective way.
      </Text>
      <SourceMixer selectedSources={['gita', 'quran', 'bible']} ratios={{ gita: 50, quran: 30, bible: 20 }} />
      <LanguageSelector current="hindi" supported={['english', 'hindi', 'urdu', 'spanish']} />
      <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>
        Notification setup and voice preview are added in this phase as placeholders.
      </Text>
    </View>
  );
}
