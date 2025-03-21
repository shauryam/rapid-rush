import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/themeContext';

interface SecondaryButtonProps {
  onPress: () => void;
  title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onPress, title }) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={[styles.secondaryButton, styles.shadowStyle, { borderColor: theme.colors.secondaryButtonBorderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.secondaryButtonText, { color: theme.colors.secondaryButtonText }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
    borderRadius: 9999,
    paddingVertical: 13,
    alignItems: 'center',
    borderWidth: 2,
  },
  secondaryButtonText: {
    fontSize: 18,
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 11.6,
    elevation: 5,
  },
});

export default SecondaryButton;