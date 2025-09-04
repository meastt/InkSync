import { Appearance } from 'react-native';
import type { Theme } from '../types';

export const lightTheme: Theme = {
  colors: {
    primary: '#1a1a1a', // ink-500
    secondary: '#00ff88', // neon-500
    background: '#f8fafc', // slate-50
    surface: '#ffffff',
    text: '#1e293b', // slate-800
    textSecondary: '#64748b', // slate-500
    border: '#e2e8f0', // slate-200
    success: '#10b981', // green-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
  },
  dark: false,
};

export const darkTheme: Theme = {
  colors: {
    primary: '#00ff88', // neon-500
    secondary: '#1a1a1a', // ink-500
    background: '#0f172a', // slate-900
    surface: '#1e293b', // slate-800
    text: '#f1f5f9', // slate-100
    textSecondary: '#94a3b8', // slate-400
    border: '#334155', // slate-700
    success: '#10b981', // green-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
  },
  dark: true,
};

export const getTheme = (isDark?: boolean): Theme => {
  if (isDark !== undefined) {
    return isDark ? darkTheme : lightTheme;
  }
  
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

export const getThemeStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  surface: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center' as const,
  },
  buttonText: {
    color: theme.colors.surface,
    fontSize: 16,
    fontWeight: '600' as const,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: theme.colors.text,
    fontSize: 16,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
