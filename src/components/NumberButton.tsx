import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '@constants/colors';

interface NumberButtonProps {
  number: number;
  onPress: () => void;
}

const NumberButton = ({number, onPress}: NumberButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.number}>{number}</Text>
    </Pressable>
  );
};
export default NumberButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: colors.white,
    borderWidth: 1,
  },
  number: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 90,
  },
});
