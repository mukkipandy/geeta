import React from 'react';
import { Text, View } from 'react-native';
import { useAppTheme } from '../theme/ThemeProvider';

interface LanguageSelectorProps {
  current: string;
  supported: string[];
}

export function LanguageSelector({ current, supported }: LanguageSelectorProps) {
  const { tokens } = useAppTheme();

  return (
    <View style={{ backgroundColor: tokens.card, borderRadius: 14, padding: 12, gap: 6 }}>
      <Text style={{ color: tokens.textPrimary }}>Language: {current}</Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>
        Available: {supported.join(', ')}
      </Text>
    </View>
  );
}
