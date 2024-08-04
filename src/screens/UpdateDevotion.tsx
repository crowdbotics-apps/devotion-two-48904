import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import Button from '@components/Button';
import FadingButton from '@components/FadingButton';
import {useNavigation} from '@react-navigation/native';
import colors from '@constants/colors';

const UpdateDevotion = () => {
  const navigation = useNavigation<any>();

  const devotions = [
    {
      title: 'Content',
      bgColors: ['#7B304A00', '#81032F'],
    },
    {
      title: 'Anxious',
      bgColors: ['#FB587A00', '#9B21A3'],
    },
    {
      title: 'Brave',
      bgColors: ['#66453000', '#F5853F'],
    },
    {
      title: 'Lonely',
      bgColors: ['#58CCFB00', '#217EA3'],
    },
  ];

  const [selectedDevotion, setSelectedDevotion] = useState<string | null>(null);

  const handleSelectPronoun = (pronoun: string) => {};

  const handleSave = () => {
    navigation.navigate('Home');
  };

  return (
    <ScreenWrapper
      headerShown
      lotieAnimation="devotion"
      style={styles.container}>
      <Typography font="medium">Hi Katherine!</Typography>
      <Typography font="regular">
        It’s time to update your Devotion. How would you best dercibe your mood?
      </Typography>
      <View style={styles.buttons}>
        {devotions.map((devotion, index) => (
          <FadingButton
            key={index}
            title={devotion.title}
            bgColors={devotion.bgColors}
            varient={selectedDevotion === devotion.title ? 'filled' : 'outline'}
            onPress={() => handleSelectPronoun(devotion.title)}
            outlinedFill={colors.primary}
          />
        ))}
      </View>
      <Button title="Save" onPress={handleSave} />
    </ScreenWrapper>
  );
};

export default UpdateDevotion;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  buttons: {
    width: '100%',
    paddingHorizontal: 20,
    rowGap: 20,
    marginVertical: 20,
  },
  footer: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});
