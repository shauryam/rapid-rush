import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/themeContext';

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title }) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={[styles.primaryButton, styles.shadowStyle, { backgroundColor: theme.colors.primaryButtonBackground }]}
      onPress={onPress}
    >
      <Text style={[styles.primaryButtonText, { color: theme.colors.primaryButtonText }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 9999,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 11.6,
    elevation: 5,
  },
});

export default PrimaryButton;