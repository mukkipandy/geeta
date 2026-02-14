import React from 'react';
import { Text, View } from 'react-native';
import { AudioPlayer } from '../components/AudioPlayer';
import { LanguageSelector } from '../components/LanguageSelector';
import { SourceMixer } from '../components/SourceMixer';
import { useAppTheme } from '../theme/ThemeProvider';

export function SettingsScreen() {
  const { tokens } = useAppTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: tokens.background, gap: 12 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 24 }}>Settings</Text>
      <SourceMixer selectedSources={['gita', 'quran', 'bible']} ratios={{ gita: 50, quran: 30, bible: 20 }} />
      <LanguageSelector current="hindi" supported={['english', 'hindi', 'urdu', 'spanish']} />
      <AudioPlayer isPlaying={false} speed={1} narrationVolume={1} musicVolume={0.6} />
    </View>
  );
}
