import colors from '@constants/colors';
import React from 'react';
import {View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}></View>
  );
};
export default LoadingScreen;
