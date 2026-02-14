import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
    <View style={[styles.container, { backgroundColor: tokens.card }]}>
      <Text style={[styles.title, { color: tokens.textPrimary }]}>{isPlaying ? 'Playing' : 'Paused'} • {speed.toFixed(2)}x</Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>
        Narration: {Math.round(narrationVolume * 100)}% • Music: {Math.round(musicVolume * 100)}%
      </Text>

      <View style={styles.row}>
        <Pressable accessibilityRole="button" style={[styles.button, { backgroundColor: tokens.serenityA }]}>
          <Text style={{ color: tokens.textPrimary }}>⏮ 15s</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, { backgroundColor: tokens.accent }]}>
          <Text style={{ color: '#1A1A1A', fontWeight: '700' }}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={[styles.button, { backgroundColor: tokens.serenityA }]}>
          <Text style={{ color: tokens.textPrimary }}>15s ⏭</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    padding: 12,
    gap: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 8
  }
});
