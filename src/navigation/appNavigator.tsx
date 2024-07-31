import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Emotions from '../screens/Emotions';
import Identity from '../screens/Identity';
import Home from '../screens/Home';
import DrawerContainer from './drawerNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import Subscribe from '../screens/Subscribe';
import Favourites from '../screens/Favourites';
import Signup from '../screens/Signup';

export interface RootStackParamList {
  [key: string]: undefined;
}

export interface DrawerStackParamList {
  HomeStackScreens: undefined;
  [key: string]: undefined;
}

export interface HomeStackParamList {
  Home: undefined;
  Emotions: undefined;
  Identity: undefined;
  Calendar: undefined;
  Subscribe: undefined;
  Settings: undefined;
  [key: string]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackScreens: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Calendar" component={Calendar} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Emotions" component={Emotions} />
      <Stack.Screen name="Identity" component={Identity} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContainer {...props} props={props} />;
      }}>
      <Drawer.Screen name="HomeStackScreens" options={{headerShown: false}}>
        {props => <HomeStackScreens />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
