import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import Button from '@components/Button';
import FadingButton from '@components/FadingButton';
import {useNavigation} from '@react-navigation/native';
import colors from '@constants/colors';
import ProfileService from '@services/ProfileService';
import {DEVOTIONS} from '@src/CONST';
import {getUser} from '@src/utils/helpers';
import StorageService from '@services/StorageService';

const UpdateDevotion = () => {
  const navigation = useNavigation<any>();

  const [user, setUser] = useState<any>({});

  const getUser = async () => {
    const user = await StorageService.getItem('user');
    console.log('User: ', JSON.parse(user));

    setUser(JSON.parse(user)?.id);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const [selectedDevotion, setSelectedDevotion] = useState<number | null>(null);
  const [profile, setProfile] = useState<any>({});

  const handleSelectDevotion = (devotion: number) => {
    setSelectedDevotion(devotion);
  };

  const fetchProfile = async () => {
    try {
      const res = await ProfileService.getProfile();
      setSelectedDevotion(res.devotion);
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
        devotion: selectedDevotion,
      });

      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating devotion', error);
    }
  };

  return (
    <ScreenWrapper
      headerShown
      lotieAnimation="devotion"
      style={styles.container}>
      <Typography font="medium">Hi {}</Typography>
      <Typography font="regular">
        It’s time to update your Devotion. How would you best dercibe your mood?
      </Typography>
      <View style={styles.buttons}>
        {DEVOTIONS.map((devotion, index) => (
          <FadingButton
            key={index}
            title={devotion.title}
            bgColors={devotion.bgColors}
            varient="filled"
            onPress={() => handleSelectDevotion(devotion.devotion)}
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
