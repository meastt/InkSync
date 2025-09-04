import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appearance, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import SavedScreen from './src/screens/SavedScreen';
import TattooTryOnScreen from './src/screens/TattooTryOnScreen';
import TattooGeneratorScreen from './src/screens/TattooGeneratorScreen';
import TattooRemovalScreen from './src/screens/TattooRemovalScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import DisclaimerScreen from './src/screens/DisclaimerScreen';

// Import services
import { initializeCreditService } from './src/services/creditService';
import { initializeSubscriptionService } from './src/services/subscriptionService';

// Import types
import type { View, Theme } from './src/types';

// Import theme
import { getTheme } from './src/utils/theme';

// Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [theme, setTheme] = useState<Theme>(() => getTheme());
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Initialize services
    initializeCreditService();
    initializeSubscriptionService();

    // Load saved theme
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(getTheme(savedTheme === 'dark'));
        } else {
          setTheme(getTheme(colorScheme === 'dark'));
        }
      } catch (error) {
        console.error('Error loading theme:', error);
        setTheme(getTheme(colorScheme === 'dark'));
      }
    };

    loadTheme();
  }, [colorScheme]);

  const toggleTheme = async () => {
    const newTheme = theme.dark ? getTheme(false) : getTheme(true);
    setTheme(newTheme);
    
    try {
      await AsyncStorage.setItem('theme', newTheme.dark ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  // Tab Navigator Component
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={CreateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="create" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Saved" 
        component={SavedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style={theme.dark ? 'light' : 'dark'} />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerTintColor: theme.colors.text,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Main" 
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="TattooTryOn" 
            component={TattooTryOnScreen}
            options={{ title: 'Tattoo Try-On' }}
          />
          <Stack.Screen 
            name="TattooGenerator" 
            component={TattooGeneratorScreen}
            options={{ title: 'AI Generator' }}
          />
          <Stack.Screen 
            name="TattooRemoval" 
            component={TattooRemovalScreen}
            options={{ title: 'Tattoo Removal' }}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{ title: 'Settings' }}
          />
          <Stack.Screen 
            name="PrivacyPolicy" 
            component={PrivacyPolicyScreen}
            options={{ title: 'Privacy Policy' }}
          />
          <Stack.Screen 
            name="Disclaimer" 
            component={DisclaimerScreen}
            options={{ title: 'Disclaimer' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// Simple Tab Icon Component
const TabIcon = ({ name, color, size }: { name: string; color: string; size: number }) => {
  // This is a simplified version - you'd want to use proper icons
  return null; // We'll implement this with proper icons
};