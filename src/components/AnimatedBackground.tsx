import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { AnimationTag } from '../types/models';
import { useAppTheme } from '../theme/ThemeProvider';

interface AnimatedBackgroundProps {
  tag: AnimationTag;
  intensity: 'subtle' | 'medium' | 'off';
}

export function AnimatedBackground({ tag, intensity }: AnimatedBackgroundProps) {
  const { tokens } = useAppTheme();
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (intensity === 'off') {
      scale.setValue(1);
      return;
    }

    const amplitude = intensity === 'subtle' ? 1.03 : 1.08;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: amplitude,
          duration: 2800,
          useNativeDriver: true
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 2800,
          useNativeDriver: true
        })
      ])
    );

    loop.start();
    return () => loop.stop();
  }, [intensity, scale]);

  return (
    <Animated.View
      style={{
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.serenityA,
        transform: [{ scale }]
      }}
    >
      <Text style={{ color: tokens.textPrimary, letterSpacing: 1 }}>{tag.toUpperCase()}</Text>
    </Animated.View>
  );
}
