import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArchiveScreen } from '../screens/ArchiveScreen';
import { DailyCardScreen } from '../screens/DailyCardScreen';
import { OnboardingFlow } from '../screens/OnboardingFlow';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useUserPreferencesStore } from '../preferences/UserPreferencesStore';
import { useAppTheme } from '../theme/ThemeProvider';

type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

type MainTabParamList = {
  Daily: undefined;
  Archive: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Daily" component={DailyCardScreen} />
      <Tab.Screen name="Archive" component={ArchiveScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  const { onboardingCompleted } = useUserPreferencesStore();
  const { tokens } = useAppTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: tokens.background,
          card: tokens.card,
          text: tokens.textPrimary,
          primary: tokens.accent,
          border: tokens.serenityB,
          notification: tokens.accent
        }
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!onboardingCompleted ? <Stack.Screen name="Onboarding" component={OnboardingFlow} /> : null}
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
