import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SpiritualSource } from '../types/models';
import { useAppTheme } from '../theme/ThemeProvider';

interface SourceMixerProps {
  selectedSources: SpiritualSource[];
  ratios: Partial<Record<SpiritualSource, number>>;
}

export function SourceMixer({ selectedSources, ratios }: SourceMixerProps) {
  const { tokens } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: tokens.card }]}> 
      <Text style={{ color: tokens.textPrimary, fontSize: 16, fontWeight: '600' }}>Source Mix</Text>
      {selectedSources.map((source) => (
        <Text key={source} style={{ color: tokens.textSecondary, fontSize: 13 }}>
          {source}: {ratios[source] ?? 0}%
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    padding: 12,
    gap: 6
  }
});
