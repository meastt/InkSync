import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { getTheme, getThemeStyles } from '../utils/theme';
import type { Theme } from '../types';

const { width } = Dimensions.get('window');

const CreateScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = getTheme();
  const styles = getThemeStyles(theme);

  const features = [
    {
      id: 'TattooTryOn',
      title: 'Tattoo Try-On',
      description: 'See how tattoos look on your body',
      icon: '🎨',
      color: '#FF6B6B',
      gradient: ['#FF6B6B', '#FF8E8E'],
    },
    {
      id: 'TattooGenerator',
      title: 'AI Generator',
      description: 'Create unique tattoo designs with AI',
      icon: '✨',
      color: '#4ECDC4',
      gradient: ['#4ECDC4', '#6ED5CC'],
    },
    {
      id: 'TattooRemoval',
      title: 'Tattoo Removal',
      description: 'Visualize tattoo removal effects',
      icon: '🧽',
      color: '#45B7D1',
      gradient: ['#45B7D1', '#6BC5D8'],
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Create
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Choose your creative tool
          </Text>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresContainer}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.id}
              style={[styles.featureCard, { backgroundColor: theme.colors.surface }]}
              onPress={() => navigation.navigate(feature.id as any)}
            >
              <LinearGradient
                colors={feature.gradient}
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

        {/* Tips Section */}
        <View style={[styles.tipsCard, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.tipsTitle, { color: theme.colors.text }]}>
            💡 Pro Tips
          </Text>
          <Text style={[styles.tipText, { color: theme.colors.textSecondary }]}>
            • Use high-quality photos for best results
          </Text>
          <Text style={[styles.tipText, { color: theme.colors.textSecondary }]}>
            • Try different lighting conditions
          </Text>
          <Text style={[styles.tipText, { color: theme.colors.textSecondary }]}>
            • Save your favorite designs
          </Text>
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
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  featureCard: {
    width: (width - 48) / 2,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  featureIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIconText: {
    fontSize: 32,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  tipsCard: {
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 20,
  },
});

export default CreateScreen;
