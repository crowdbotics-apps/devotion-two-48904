import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const About = () => {
  return (
    <ScreenWrapper headerShown>
      <Typography font="regularItalic">About</Typography>
    </ScreenWrapper>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {},
});
