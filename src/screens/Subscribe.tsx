import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const Subscribe = () => {
  return (
    <ScreenWrapper headerShown>
      <Typography font="regularItalic">Subscribe</Typography>
    </ScreenWrapper>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {},
});
