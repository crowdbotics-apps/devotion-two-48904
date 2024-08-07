import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import {useNavigation} from '@react-navigation/native';

const PastDevotions = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper headerShown lotieAnimation="devotion" showInfoIcon>
      <Typography font="regularItalic">
        "Never lose hope. Storms make people stronger and never last forever." -
        Roy T. Bennett. I like to think of it as starting to work out katherine,
        it can be painful at first. Yet over time, you will be stronger. This
        storm will pass. You will be more than ok. You will be stronger. You
        will be thriving Katherine!
      </Typography>
    </ScreenWrapper>
  );
};

export default PastDevotions;

const styles = StyleSheet.create({});
