import React from 'react';
import { Pressable, StyleSheet, Text, Dimensions } from 'react-native';
import colors from '@constants/colors';

const {width} = Dimensions.get('window');

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({onPress, title}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    height: 39,
    borderColor: colors.white,
    borderWidth: 1,
    width: width * 0.6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
});
