import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function OnboardingFlow() {
  const { tokens } = useAppTheme();
  const { preferences, updatePreferredLanguage, completeOnboarding } = useUserPreferencesStore();

  return (
    <View style={[styles.container, { backgroundColor: tokens.background }]}> 
      <Text style={[styles.title, { color: tokens.textPrimary }]}>Welcome to Geeta</Text>
      <Text style={[styles.subtitle, { color: tokens.textSecondary }]}>A gentle, multi-faith space for one reflection each day.</Text>

      <SourceMixer selectedSources={preferences.selected_sources} ratios={preferences.source_mixing_ratio} />
      <LanguageSelector current={preferences.preferred_language} supported={['english', 'hindi', 'urdu', 'spanish']} />

      <View style={styles.row}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Use English"
          onPress={() => updatePreferredLanguage('english')}
          style={[styles.chip, { backgroundColor: tokens.card }]}
        >
          <Text style={{ color: tokens.textSecondary }}>Use English</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Use Hindi"
          onPress={() => updatePreferredLanguage('hindi')}
          style={[styles.chip, { backgroundColor: tokens.card }]}
        >
          <Text style={{ color: tokens.textSecondary }}>Use Hindi</Text>
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Continue to app"
        onPress={completeOnboarding}
        style={[styles.primaryButton, { backgroundColor: tokens.accent }]}
      >
        <Text style={{ color: '#1A1A1A', fontWeight: '700' }}>Continue</Text>
      </Pressable>

      <Text style={[styles.footer, { color: tokens.textSecondary }]}>Notification setup and voice preview are next-step enhancements.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    gap: 8
  },
  chip: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  primaryButton: {
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center'
  },
  footer: {
    fontSize: 12
  }
});
