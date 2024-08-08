import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import Button from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDevotionsProvider} from '@src/context/DevotionsProvider';

const Home = () => {
  const {devotions, fetchUserDevotions} = useDevotionsProvider();
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    fetchUserDevotions();
  }, []);

  const handleUpdateDevotion = () => {
    navigation.navigate('UpdateDevotion');
  };

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <ScreenWrapper
      headerShown
      lotieAnimation="devotion"
      showInfoIcon
      headerLeftIcon="menu"
      onPressLeftIcon={handleOpenDrawer}>
      <Typography font="regularItalic">
        "Never lose hope. Storms make people stronger and never last forever." -
        Roy T. Bennett. I like to think of it as starting to work out katherine,
        it can be painful at first. Yet over time, you will be stronger. This
        storm will pass. You will be more than ok. You will be stronger. You
        will be thriving Katherine!
      </Typography>

      <View style={styles.footer}>
        <Button title="Update Your Devotion" onPress={handleUpdateDevotion} />
        <Typography font="regularItalic" size="small">
          You can tap this button to update your mood and change Devotion’s
          messaging.
        </Typography>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  footer: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});
