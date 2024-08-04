import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import colors from '@constants/colors';
import Typography from '@components/Typography';
import FadingButton from '@components/FadingButton';

interface DrawerContainerProps {
  props: any;
}

function DrawerContainer(props: DrawerContainerProps) {
  const handleNavigate = (route: string) => {
    props?.props?.navigation?.closeDrawer();
    props?.props?.navigation.navigate(route);
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
          <FadingButton
            title="Prior Devotions"
            bgColors={['#E5ACC000', '#F780AA']}
            onPress={() => handleNavigate('Calendar')}
            varient="outline"
          />
          <FadingButton
            title="Favourites"
            bgColors={['#58CCFB00', '#217EA3']}
            onPress={() => handleNavigate('Favourites')}
            varient="outline"
          />
          <FadingButton
            title="Settings"
            bgColors={['#FFF43000', '#C2BD6A']}
            onPress={() => handleNavigate('Settings')}
            varient="outline"
          />
          <FadingButton
            title="Manage Plan"
            bgColors={['#66453000', '#F5853F']}
            onPress={() => handleNavigate('Subscribe')}
            varient="outline"
          />
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
});
export default DrawerContainer;
