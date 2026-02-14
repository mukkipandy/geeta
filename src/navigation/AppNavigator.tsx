import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DailyCardScreen } from '../screens/DailyCardScreen';
import { OnboardingFlow } from '../screens/OnboardingFlow';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useAppTheme } from '../theme/ThemeProvider';

type Route = 'onboarding' | 'daily' | 'settings';

/**
 * Temporary in-memory route switcher to keep this starter dependency-light.
 * Replace with React Navigation stack/tab setup in integration phase.
 */
export function AppNavigator() {
  const [route] = useState<Route>('daily');
  const { tokens } = useAppTheme();

  return (
    <View style={{ flex: 1, backgroundColor: tokens.background }}>
      <Text style={{ color: tokens.textSecondary, fontSize: 12, padding: 8 }}>
        Route: {route} (placeholder navigator)
      </Text>
      {route === 'onboarding' ? <OnboardingFlow /> : null}
      {route === 'daily' ? <DailyCardScreen /> : null}
      {route === 'settings' ? <SettingsScreen /> : null}
    </View>
  );
}
