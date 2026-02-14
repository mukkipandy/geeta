import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function OnboardingFlow() {
  const { tokens } = useAppTheme();
  const { preferences, updatePreferredLanguage } = useUserPreferencesStore();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: tokens.background, gap: 12 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 24 }}>Welcome</Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 14 }}>
        Set your daily wisdom preferences in a calm, reflective way.
      </Text>
      <SourceMixer selectedSources={preferences.selected_sources} ratios={preferences.source_mixing_ratio} />
      <LanguageSelector current={preferences.preferred_language} supported={['english', 'hindi', 'urdu', 'spanish']} />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Pressable
          onPress={() => updatePreferredLanguage('english')}
          style={{ backgroundColor: tokens.card, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10 }}
        >
          <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>Use English</Text>
        </Pressable>
        <Pressable
          onPress={() => updatePreferredLanguage('hindi')}
          style={{ backgroundColor: tokens.card, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10 }}
        >
          <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>Use Hindi</Text>
        </Pressable>
      </View>
      <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>
        Notification setup and voice preview are placeholders for next phase.
      </Text>
    </View>
  );
}
