import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import colors from '@constants/colors';
import TodayDate from './TodayDate';

interface HeaderProps {
  leftIcon?: string;
  rightIcon?: string;
  onPressLeftIcon?: () => void;
}

const Header = ({leftIcon, rightIcon, onPressLeftIcon}: HeaderProps) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <IonIcon
        name={leftIcon || 'chevron-back'}
        size={24}
        color={colors.white}
        onPress={() =>
          onPressLeftIcon ? onPressLeftIcon() : navigation.goBack()
        }
      />
      <TodayDate />
      <View>
        {rightIcon && (
          <IonIcon name={rightIcon} size={24} color={colors.white} />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    width: '100%',
  },
});
