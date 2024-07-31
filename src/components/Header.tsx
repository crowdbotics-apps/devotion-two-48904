import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import colors from '@constants/colors';
import TodayDate from './TodayDate';

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <IonIcon
        name="menu"
        size={24}
        color={colors.white}
        onPress={() => navigation.toggleDrawer()}
      />
      <TodayDate />
      <View>
        <IonIcon name="heart-outline" size={24} color={colors.white} />
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
