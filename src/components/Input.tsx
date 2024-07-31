import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '@constants/colors';
import {WIDTH} from '../CONST';

interface InputProps {
  value: string;
  onChange: (values: string) => void;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

const Input = ({value, placeholder, onChange, autoCapitalize = 'none'}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        autoCapitalize={autoCapitalize}
      />
      <View style={styles.borderBottom} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 40,
    marginVertical: 10,
    width: WIDTH,
  },
  borderBottom: {
    height: 1,
    backgroundColor: 'gray',
  },
  input: {
    height: 30,
    width: WIDTH,
    color: colors.grey,
  },
});
