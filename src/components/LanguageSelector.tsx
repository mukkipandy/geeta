import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../theme/ThemeProvider';

interface LanguageSelectorProps {
  current: string;
  supported: string[];
}

export function LanguageSelector({ current, supported }: LanguageSelectorProps) {
  const { tokens } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: tokens.card }]}> 
      <Text style={{ color: tokens.textPrimary, fontWeight: '600' }}>Language: {current}</Text>
      <Text style={{ color: tokens.textSecondary, fontSize: 13 }}>Available: {supported.join(', ')}</Text>
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
