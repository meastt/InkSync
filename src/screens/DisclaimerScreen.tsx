import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getTheme, getThemeStyles } from '../utils/theme';

const DisclaimerScreen: React.FC = () => {
  const theme = getTheme();
  const styles = getThemeStyles(theme);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Disclaimer
        </Text>
        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          Coming Soon
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  description: { fontSize: 16 },
});

export default DisclaimerScreen;
