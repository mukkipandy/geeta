import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArchiveScreen } from '../screens/ArchiveScreen';
import { DailyCardScreen } from '../screens/DailyCardScreen';
import { OnboardingFlow } from '../screens/OnboardingFlow';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useAppTheme } from '../theme/ThemeProvider';

export type Route = 'onboarding' | 'daily' | 'archive' | 'settings';

interface NavButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

function NavButton({ label, active, onPress }: NavButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: active ? '#FFFFFF30' : 'transparent'
      }}
    >
      <Text style={{ color: '#FFFFFF', fontSize: 12 }}>{label}</Text>
    </Pressable>
  );
}

/**
 * Temporary in-memory route switcher to keep this starter dependency-light.
 * Replace with React Navigation stack/tab setup in integration phase.
 */
export function AppNavigator() {
  const [route, setRoute] = useState<Route>('daily');
  const { tokens } = useAppTheme();

  return (
    <View style={{ flex: 1, backgroundColor: tokens.background }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor: tokens.serenityB
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 12, marginRight: 4 }}>Route</Text>
        <NavButton label="Onboarding" active={route === 'onboarding'} onPress={() => setRoute('onboarding')} />
        <NavButton label="Daily" active={route === 'daily'} onPress={() => setRoute('daily')} />
        <NavButton label="Archive" active={route === 'archive'} onPress={() => setRoute('archive')} />
        <NavButton label="Settings" active={route === 'settings'} onPress={() => setRoute('settings')} />
      </View>

      {route === 'onboarding' ? <OnboardingFlow /> : null}
      {route === 'daily' ? <DailyCardScreen /> : null}
      {route === 'archive' ? <ArchiveScreen /> : null}
      {route === 'settings' ? <SettingsScreen /> : null}
    </View>
  );
}
