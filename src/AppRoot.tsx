import React from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { UserPreferencesProvider } from './preferences/UserPreferencesStore';
import { AppThemeProvider } from './theme/ThemeProvider';

export function AppRoot() {
  return (
    <AppThemeProvider>
      <UserPreferencesProvider>
        <AppNavigator />
      </UserPreferencesProvider>
    </AppThemeProvider>
  );
}
