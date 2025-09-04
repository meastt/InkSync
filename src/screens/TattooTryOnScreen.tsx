import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { getTheme, getThemeStyles } from '../utils/theme';
import { canGenerate, consumeCredit } from '../services/creditService';

const TattooTryOnScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = getTheme();
  const styles = getThemeStyles(theme);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTryOn = async () => {
    const canGen = await canGenerate();
    if (!canGen) {
      Alert.alert(
        'No Credits',
        'You need credits to use this feature. Would you like to upgrade?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Upgrade', onPress: () => {/* Navigate to upgrade */} },
        ]
      );
      return;
    }

    setIsProcessing(true);
    try {
      const result = await consumeCredit();
      if (result.success) {
        Alert.alert('Success', 'Tattoo try-on feature coming soon!');
      } else {
        Alert.alert('Error', 'Failed to process request');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Tattoo Try-On
        </Text>
        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          Upload a photo and see how different tattoo designs look on your body
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.primary },
            isProcessing && styles.buttonDisabled
          ]}
          onPress={handleTryOn}
          disabled={isProcessing}
        >
          <Text style={[styles.buttonText, { color: theme.colors.surface }]}>
            {isProcessing ? 'Processing...' : 'Start Try-On'}
          </Text>
        </TouchableOpacity>

        <View style={[styles.infoCard, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
            How it works:
          </Text>
          <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
            1. Take or upload a photo{'\n'}
            2. Select a tattoo design{'\n'}
            3. See how it looks on your body
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 32,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  infoCard: {
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TattooTryOnScreen;
