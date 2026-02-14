import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AudioPlayer } from '../components/AudioPlayer';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

export function SettingsScreen() {
  const { tokens } = useAppTheme();
  const { preferences, updateMusicVolume, updatePreferredLanguage } = useUserPreferencesStore();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: tokens.background, gap: 12 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 24 }}>Settings</Text>
      <SourceMixer selectedSources={preferences.selected_sources} ratios={preferences.source_mixing_ratio} />
      <LanguageSelector current={preferences.preferred_language} supported={['english', 'hindi', 'urdu', 'spanish']} />

      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Pressable
          onPress={() => updatePreferredLanguage('english')}
          style={{ backgroundColor: tokens.card, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10 }}
        >
          <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>English</Text>
        </Pressable>
        <Pressable
          onPress={() => updatePreferredLanguage('hindi')}
          style={{ backgroundColor: tokens.card, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10 }}
        >
          <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>Hindi</Text>
        </Pressable>
        <Pressable
          onPress={() => updateMusicVolume(preferences.music_settings.volume + 10)}
          style={{ backgroundColor: tokens.card, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 10 }}
        >
          <Text style={{ color: tokens.textSecondary, fontSize: 12 }}>Music +10</Text>
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
