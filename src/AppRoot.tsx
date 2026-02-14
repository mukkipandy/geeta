import React, { useEffect } from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { UserPreferencesProvider, useUserPreferencesStore } from './preferences/UserPreferencesStore';
import { AppThemeProvider, useAppTheme } from './theme/ThemeProvider';

function RootContent() {
  const { preferences } = useUserPreferencesStore();
  const { setThemeName } = useAppTheme();

  useEffect(() => {
    setThemeName(preferences.theme);
  }, [preferences.theme, setThemeName]);

  return <AppNavigator />;
}

export function AppRoot() {
  return (
    <AppThemeProvider>
      <UserPreferencesProvider>
        <RootContent />
      </UserPreferencesProvider>
    </AppThemeProvider>
  );
}
