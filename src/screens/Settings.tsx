import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const Settings = () => {
  return (
    <ScreenWrapper headerShown lotieAnimation="devotion">
      <Typography font="regularItalic">Settings</Typography>
    </ScreenWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {},
});
