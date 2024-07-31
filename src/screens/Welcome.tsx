import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';

import ScreenWrapper from '@components/ScreenWrapper';
import Button from '@components/Button';
import colors from '@constants/colors';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation<any>();

  const handleStartAnew = () => {
    navigation.navigate('Signup');
  };

  const handleContinue = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.date}>
          Today is {dayjs().format('MMM DD, YYYY')}
        </Text>
        <Text style={styles.title}>Welcome</Text>
        <View>
          <Button title="Start Anew" onPress={handleStartAnew} />
          <Button title="Continue" onPress={handleContinue} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  date: {
    color: colors.white,
    fontSize: 20,
  },
  title: {
    color: colors.white,
    fontSize: 40,
  },
});
