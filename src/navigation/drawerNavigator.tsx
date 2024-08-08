import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import colors from '@constants/colors';
import Typography from '@components/Typography';
import FadingButton from '@components/FadingButton';
import StorageService from '@services/StorageService';

interface DrawerContainerProps {
  props: any;
}

const ROUTES = [
  {
    title: 'Prior Devotions',
    route: 'Calendar',
    bgColors: ['#E5ACC000', '#F780AA'],
  },
  {
    title: 'Favourites',
    route: 'Favourites',
    bgColors: ['#58CCFB00', '#217EA3'],
  },
  {
    title: 'Settings',
    route: 'Settings',
    bgColors: ['#FFF43000', '#C2BD6A'],
  },
  {
    title: 'Manage Plan',
    route: 'Subscribe',
    bgColors: ['#66453000', '#F5853F'],
  },
];

function DrawerContainer(props: DrawerContainerProps) {
  const handleNavigate = (route: string) => {
    props?.props?.navigation?.closeDrawer();
    props?.props?.navigation.navigate(route);
  };

  const handleLogout = async () => {
    console.log('Logout');
    StorageService.removeItem('token');
    StorageService.removeItem('user');

    props?.props?.navigation?.closeDrawer();
    props?.props?.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Typography style={styles.salutation}>Hi Katherine!</Typography>
        <View style={styles.buttons}>
          <Pressable
            onPress={handleLogout}
            style={{
              padding: 20,
              paddingLeft: 30,
              marginBottom: 20,
              backgroundColor: colors.secondary,
            }}>
            <Typography style={styles.customTextStyle}>Log Out</Typography>
          </Pressable>
          {ROUTES.map((route, index) => (
            <FadingButton
              key={index}
              title={route.title}
              bgColors={route.bgColors}
              onPress={() => handleNavigate(route.route)}
            />
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    paddingRight: 20,
    rowGap: 20,
  },
  container: {
    flex: 1,
    zIndex: 1,
    backgroundColor: colors.secondary,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    flex: 1,
  },
  salutation: {
    marginLeft: 30,
    textAlign: 'left',
    marginBottom: 40,
  },
  customTextStyle: {},
});
export default DrawerContainer;
