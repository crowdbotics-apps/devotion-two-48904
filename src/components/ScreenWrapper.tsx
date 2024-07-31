import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from 'react-native';
import LonelyLottieAnimation from '../assets/lottie/lonely.json';
import BraveLottieAnimation from '../assets/lottie/brave.json';
import ContentLottieAnimation from '../assets/lottie/content.json';
import AnxiousLottieAnimation from '../assets/lottie/anxious.json';
import DevotionLottieAnimation from '../assets/lottie/devotion.json';

import colors from '@constants/colors';
import Header from '@components/Header';
import Lottie from './Lottie';

interface ScreenWrapperProps {
  children: React.ReactNode;
  headerShown?: boolean;
  style?: ViewStyle;
  lotieAnimation?: 'anxious' | 'brave' | 'content' | 'devotion' | 'lonely';
}

const ScreenWrapper = ({children, headerShown = false, style, lotieAnimation}: ScreenWrapperProps) => {
  const renderLottie = () => {
    let source;

    switch (lotieAnimation) {
      case 'anxious':
        source = AnxiousLottieAnimation;
        break;

      case 'brave':
        source = BraveLottieAnimation;
        break;

      case 'content':
        source = ContentLottieAnimation;
        break;

      case 'devotion':
        source = DevotionLottieAnimation;
        break;

      case 'lonely':
        source = LonelyLottieAnimation;

        break;

      default:
        break;
    }

    if (source) {
      return <Lottie source={source} autoPlay loop />;
    }

    return null;
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} style={{flex: 1}}>
        {headerShown && <Header />}
        {renderLottie()}

        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
  },
});
