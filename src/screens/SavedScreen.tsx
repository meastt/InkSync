import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { getTheme, getThemeStyles } from '../utils/theme';
import type { Theme, Idea } from '../types';

const { width } = Dimensions.get('window');
const itemWidth = (width - 48) / 2;

const SavedScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = getTheme();
  const styles = getThemeStyles(theme);
  const [savedIdeas, setSavedIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    loadSavedIdeas();
  }, []);

  const loadSavedIdeas = async () => {
    // Mock data for now - in real app, load from AsyncStorage or API
    const mockIdeas: Idea[] = [
      {
        id: 1,
        prompt: 'Dragon tattoo design',
        image_url: 'https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=Dragon',
      },
      {
        id: 2,
        prompt: 'Minimalist rose tattoo',
        image_url: 'https://via.placeholder.com/200x200/4ECDC4/FFFFFF?text=Rose',
      },
      {
        id: 3,
        prompt: 'Geometric mandala',
        image_url: 'https://via.placeholder.com/200x200/45B7D1/FFFFFF?text=Mandala',
      },
    ];
    setSavedIdeas(mockIdeas);
  };

  const renderIdea = ({ item }: { item: Idea }) => (
    <TouchableOpacity
      style={[styles.ideaCard, { backgroundColor: theme.colors.surface }]}
      onPress={() => {
        // Navigate to idea detail or try-on
        console.log('Selected idea:', item);
      }}
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.ideaImage}
        resizeMode="cover"
      />
      <View style={styles.ideaContent}>
        <Text style={[styles.ideaPrompt, { color: theme.colors.text }]} numberOfLines={2}>
          {item.prompt}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>
        No Saved Ideas Yet
      </Text>
      <Text style={[styles.emptyDescription, { color: theme.colors.textSecondary }]}>
        Start creating and save your favorite designs here
      </Text>
      <TouchableOpacity
        style={[styles.createButton, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Create' as any)}
      >
        <Text style={[styles.createButtonText, { color: theme.colors.surface }]}>
          Start Creating
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Saved Ideas
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          {savedIdeas.length} saved designs
        </Text>
      </View>

      {savedIdeas.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={savedIdeas}
          renderItem={renderIdea}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
  },
  ideaCard: {
    width: itemWidth,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ideaImage: {
    width: '100%',
    height: itemWidth,
  },
  ideaContent: {
    padding: 12,
  },
  ideaPrompt: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  createButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SavedScreen;
