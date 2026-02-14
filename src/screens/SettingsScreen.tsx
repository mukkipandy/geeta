import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AudioPlayer } from '../components/AudioPlayer';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function SettingsScreen() {
  const { tokens } = useAppTheme();
  const { preferences, updateMusicVolume, updatePreferredLanguage, updateTheme } = useUserPreferencesStore();

  return (
    <View style={[styles.container, { backgroundColor: tokens.background }]}>
      <Text style={[styles.title, { color: tokens.textPrimary }]}>Settings</Text>

      <SourceMixer selectedSources={preferences.selected_sources} ratios={preferences.source_mixing_ratio} />
      <LanguageSelector current={preferences.preferred_language} supported={['english', 'hindi', 'urdu', 'spanish']} />

      <View style={styles.row}>
        <Pressable onPress={() => updatePreferredLanguage('english')} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>English</Text>
        </Pressable>
        <Pressable onPress={() => updatePreferredLanguage('hindi')} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Hindi</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable onPress={() => updateMusicVolume(preferences.music_settings.volume - 10)} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Music -10</Text>
        </Pressable>
        <Pressable onPress={() => updateMusicVolume(preferences.music_settings.volume + 10)} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Music +10</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable onPress={() => updateTheme('light')} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Light</Text>
        </Pressable>
        <Pressable onPress={() => updateTheme('dark')} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Dark</Text>
        </Pressable>
        <Pressable onPress={() => updateTheme('pastel')} style={[styles.chip, { backgroundColor: tokens.card }]}>
          <Text style={{ color: tokens.textSecondary }}>Pastel</Text>
        </Pressable>
      </View>

      <AudioPlayer
        isPlaying={false}
        speed={preferences.voice_settings.speed}
        narrationVolume={1}
        musicVolume={preferences.music_settings.volume / 100}
      />
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
  row: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap'
  },
  chip: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12
  }
});
