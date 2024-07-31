import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {WIDTH} from '../CONST';

interface LottieProps {
  source: any;
  autoPlay?: boolean;
  loop?: boolean;
  style?: any;
}

const Lottie = ({source, autoPlay = true, loop = true, style}: LottieProps) => {
  return <LottieView source={source} autoPlay={autoPlay} loop={loop} style={[styles.container, style]} />;
};
export default Lottie;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    height: WIDTH,
  },
});
