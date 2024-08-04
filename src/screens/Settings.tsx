import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import FadingButton from '@components/FadingButton';
import Input from '@components/Input';
import globalStyles from '@src/styles/globalStyles';
import colors from '@constants/colors';
import Button from '@components/Button';

const PRONOUNS = [
  {
    title: 'She/Her',
    bgColors: ['#7B304A00', '#81032F'],
  },
  {
    title: 'He/Him',
    bgColors: ['#58CCFB00', '#237DA2'],
  },
  {
    title: 'They/Them',
    bgColors: ['#66453000', '#BEBA65'],
  },
  {
    title: 'Other',
    bgColors: ['#58CCFB00', '#67BF7F'],
  },
];

const Settings = () => {
  const [name, setName] = React.useState('');
  const [selectePronoun, setSelectePronoun] = React.useState('She/Her');

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleSelect = (mood: string) => {
    console.log(mood);
    setSelectePronoun(mood);
  };

  const handleSave = () => {
    console.log('Save');
  };

  return (
    <ScreenWrapper headerShown lotieAnimation="devotion">
      <Typography font="semiBold" style={globalStyles.title}>
        Settings
      </Typography>
      <View style={styles.input}>
        <Typography font="regular" style={globalStyles.subtitle}>
          Your name
        </Typography>
        <Input value={name} onChange={handleChangeName} />
      </View>
      <Typography font="semiBold">Your pronouns</Typography>

      <View style={styles.buttons}>
        {PRONOUNS.map((pronoun, index) => (
          <FadingButton
            key={index}
            title={pronoun.title}
            bgColors={pronoun.bgColors}
            onPress={() => handleSelect(pronoun.title)}
            outlinedFill={colors.primary}
            varient={pronoun.title === selectePronoun ? 'filled' : 'outline'}
          />
        ))}
      </View>

      <Button title="Save" onPress={handleSave} />
    </ScreenWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
  },
  buttons: {
    width: '100%',
    paddingHorizontal: 20,
    rowGap: 20,
    marginVertical: 20,
  },
});
