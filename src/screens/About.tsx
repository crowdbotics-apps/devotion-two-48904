import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';
import Button from '@components/Button';

const About = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      headerShown
      lotieAnimation="content"
      contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Typography font="semiBold" style={styles.title}>
          DEVOTION
        </Typography>
        <Typography font="regular" style={styles.desc}>
          Devotion was made with love by Euphoria.LGBT, Inc. Euphoria creates
          transgender first technology that seeks to alleviate the great pains
          of transition. Tap on any of the icons below to learn more about our
          other apps.
        </Typography>
      </View>

      <View style={styles.section}>
        <Image
          source={require('../assets/png/SolaceIcon.png')}
          style={styles.image}
        />
        <Typography font="semiBold" style={styles.title}>
          SOLACE
        </Typography>

        <Typography font="regular" style={styles.desc}>
          Solace provides information and resources to guide transgender people
          through whatever process of gender transition they desire. Now
          available, for free, on iOS & Android .
        </Typography>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../assets/png/ClarityIcon.png')}
          style={styles.image}
        />
        <Typography font="semiBold" style={styles.title}>
          Clarity
        </Typography>

        <Typography font="regular" style={styles.desc}>
          Solace provides information and resources to guide transgender people
          through whatever process of gender transition they desire. Now
          available, for free, on iOS & Android .
        </Typography>
      </View>

      <View style={styles.section}>
        <Image
          source={require('../assets/png/BlissIcon.png')}
          style={styles.image}
        />
        <Typography font="semiBold" style={styles.title}>
          Bliss
        </Typography>

        <Typography font="regular" style={styles.desc}>
          A revolutionary savings app for the transgender community. Your Bliss
          fund is so much more than just passive savings – every time you get a
          push notification, it’s helping you move closer to being yourself.
        </Typography>
      </View>

      <Button title="Return" onPress={() => navigation.goBack()} />
    </ScreenWrapper>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 10,
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    rowGap: 20,
  },
  image: {
    width: 78,
    height: 78,
    alignSelf: 'center',
  },
});
