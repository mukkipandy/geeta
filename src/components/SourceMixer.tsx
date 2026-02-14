import React from 'react';
import { Text, View } from 'react-native';
import { SpiritualSource } from '../types/models';
import { useAppTheme } from '../theme/ThemeProvider';

interface SourceMixerProps {
  selectedSources: SpiritualSource[];
  ratios: Partial<Record<SpiritualSource, number>>;
}

export function SourceMixer({ selectedSources, ratios }: SourceMixerProps) {
  const { tokens } = useAppTheme();

  return (
    <View style={{ backgroundColor: tokens.card, borderRadius: 14, padding: 12, gap: 6 }}>
      <Text style={{ color: tokens.textPrimary, fontSize: 16 }}>Source Mix</Text>
      {selectedSources.map((source) => (
        <Text key={source} style={{ color: tokens.textSecondary, fontSize: 13 }}>
          {source}: {ratios[source] ?? 0}%
        </Text>
      ))}
    </View>
  );
}
