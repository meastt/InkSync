import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { getSubscriptionInfo } from '../services/creditService';
import { getTheme, getThemeStyles } from '../utils/theme';
import type { Theme } from '../types';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState<Theme>(getTheme());
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>(null);

  useEffect(() => {
    loadSubscriptionInfo();
  }, []);

  const loadSubscriptionInfo = async () => {
    const info = await getSubscriptionInfo();
    setSubscriptionInfo(info);
  };

  const styles = getThemeStyles(theme);

  const features = [
    {
      id: 'tryOn',
      title: 'Tattoo Try-On',
      description: 'See how tattoos look on your body',
      icon: '🎨',
      color: '#FF6B6B',
    },
    {
      id: 'generator',
      title: 'AI Generator',
      description: 'Create unique tattoo designs',
      icon: '✨',
      color: '#4ECDC4',
    },
    {
      id: 'removal',
      title: 'Tattoo Removal',
      description: 'Visualize tattoo removal effects',
      icon: '🧽',
      color: '#45B7D1',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            TattooAI
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Your AI-powered tattoo companion
          </Text>
        </View>

        {/* Credit Display */}
        {subscriptionInfo && (
          <View style={[styles.creditCard, { backgroundColor: theme.colors.surface }]}>
            <View style={styles.creditInfo}>
              <Text style={[styles.creditLabel, { color: theme.colors.textSecondary }]}>
                Credits
              </Text>
              <Text style={[styles.creditCount, { color: theme.colors.text }]}>
                {subscriptionInfo.isUnlimited ? '∞' : subscriptionInfo.totalCredits}
              </Text>
            </View>
            {subscriptionInfo.hasSubscription && (
              <View style={styles.subscriptionBadge}>
                <Text style={styles.subscriptionText}>
                  {subscriptionInfo.plan?.name || 'PRO'}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Features Grid */}
        <View style={styles.featuresContainer}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.id}
              style={[styles.featureCard, { backgroundColor: theme.colors.surface }]}
              onPress={() => navigation.navigate(feature.id as any)}
            >
              <LinearGradient
                colors={[feature.color, `${feature.color}80`]}
                style={styles.featureIcon}
              >
                <Text style={styles.featureIconText}>{feature.icon}</Text>
              </LinearGradient>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                {feature.title}
              </Text>
              <Text style={[styles.featureDescription, { color: theme.colors.textSecondary }]}>
                {feature.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Quick Actions
          </Text>
          
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
            onPress={() => navigation.navigate('Saved' as any)}
          >
            <Text style={[styles.actionButtonText, { color: theme.colors.surface }]}>
              View Saved Ideas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.colors.secondary }]}
            onPress={() => navigation.navigate('Settings' as any)}
          >
            <Text style={[styles.actionButtonText, { color: theme.colors.background }]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  creditCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  creditInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditLabel: {
    fontSize: 14,
    marginRight: 8,
  },
  creditCount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subscriptionBadge: {
    backgroundColor: '#00ff88',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  subscriptionText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  featureCard: {
    width: (width - 48) / 2,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIconText: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  quickActions: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
