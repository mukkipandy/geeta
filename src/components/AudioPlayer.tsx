import React from 'react';
import { Text, View } from 'react-native';
import { useAppTheme } from '../theme/ThemeProvider';

interface AudioPlayerProps {
  isPlaying: boolean;
  speed: number;
  narrationVolume: number;
  musicVolume: number;
}

export function AudioPlayer({ isPlaying, speed, narrationVolume, musicVolume }: AudioPlayerProps) {
  const { tokens } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: tokens.card,
        borderRadius: 14,
        padding: 12,
        gap: 8
      }}
    >
      <Text style={{ color: tokens.textPrimary, fontSize: 16 }}>
        {isPlaying ? 'Playing' : 'Paused'} • {speed.toFixed(2)}x
      </Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>
        Narration: {Math.round(narrationVolume * 100)}% • Music: {Math.round(musicVolume * 100)}%
      </Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>Controls placeholder: play/pause, seek, dual volume sliders.</Text>
    </View>
  );
}
