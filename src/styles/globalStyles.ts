import colors from '@constants/colors';
import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  error: {
    color: colors.red,
    fontSize: 12,
    textAlign: 'center',
  },
  rowGap20: {
    rowGap: 20,
  },
});

export default globalStyles;
