import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const Favourites = () => {
  return (
    <ScreenWrapper headerShown lotieAnimation="devotion">
      <Typography font="regularItalic">
        “Oops! You haven’t added anything for me yet, Katherina!
      </Typography>
    </ScreenWrapper>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {},
});
