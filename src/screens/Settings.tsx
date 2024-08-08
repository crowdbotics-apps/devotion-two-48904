import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import Button from '@components/Button';
import FadingButton from '@components/FadingButton';
import {useNavigation} from '@react-navigation/native';
import Input from '@components/Input';
import colors from '@constants/colors';
import ProfileService from '@services/ProfileService';
import globalStyles from '@src/styles/globalStyles';
import {PRONOUNS} from '@src/CONST';

const Settings = () => {
  const navigation = useNavigation<any>();

  const [selectedPronoun, setSelectedPronoun] = useState<number | null>(null);
  const [profile, setProfile] = useState<any>({});
  const [name, setName] = React.useState('');

  const handleSelectPronoun = (pronoun: number) => {
    setSelectedPronoun(pronoun);
  };

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const fetchProfile = async () => {
    try {
      const res = await ProfileService.getProfile();
      setSelectedPronoun(res.pronoun);
      setProfile(res);
    } catch (error) {
      console.error('Error fetching profile', error);
    }
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      await ProfileService.updateProfile({
        pronoun: selectedPronoun,
      });

      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating pronoun', error);
    }
  };

  return (
    <ScreenWrapper
      headerShown
      lotieAnimation="anxious"
      style={styles.container}>
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
            varient={selectedPronoun === pronoun.pronoun ? 'filled' : 'outline'}
            onPress={() => handleSelectPronoun(pronoun.pronoun)}
            outlinedFill={colors.primary}
          />
        ))}
      </View>
      <Button title="Save" onPress={handleSave} />
    </ScreenWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  input: {
    marginVertical: 20,
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
