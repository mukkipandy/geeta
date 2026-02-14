import React from 'react';
import { View, Text } from 'react-native';
import { AnimationTag } from '../types/models';
import { useAppTheme } from '../theme/ThemeProvider';

interface AnimatedBackgroundProps {
  tag: AnimationTag;
  intensity: 'subtle' | 'medium' | 'off';
}

/**
 * Placeholder visual component. Replace with Lottie or Rive in Phase 3.
 */
export function AnimatedBackground({ tag, intensity }: AnimatedBackgroundProps) {
  const { tokens } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.serenityA
      }}
    >
      <Text style={{ color: tokens.textPrimary }}>
        {tag.toUpperCase()} • {intensity.toUpperCase()} MOTION
      </Text>
    </View>
  );
}
