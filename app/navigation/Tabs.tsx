import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ROUTES } from '../constants';
import {
  CommunityScreen,
  HomeScreen,
  MovieScreen,
  TrailerScreen,
} from '../modules';
import { RootStackParamList } from './AppNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../theme';
import { Strings } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
type BottomTabNavigatorParamList = {
  [ROUTES.HomeScreen]: undefined;
  [ROUTES.MovieScreen]: undefined;
  [ROUTES.TrailerScreen]: undefined;
  [ROUTES.CommunityScreen]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const tabBarLabel = {
  [ROUTES.HomeScreen]: Strings.home,
  [ROUTES.MovieScreen]: Strings.movie,
  [ROUTES.TrailerScreen]: Strings.trailer,
  [ROUTES.CommunityScreen]: Strings.community,
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.HomeScreen}>
      <HomeStack.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HomeScreen}
      screenOptions={({ route }) => ({
        tabBarLabel: tabBarLabel[route.name],
        tabBarHeight: 25,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Color.lightBlue,
        tabBarInactiveTintColor: Color.white,
        tabBarStyle: {
          backgroundColor: Color.darkBlue,
        },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            [ROUTES.HomeScreen]: 'home',
            [ROUTES.MovieScreen]: 'movie',
            [ROUTES.TrailerScreen]: 'chip',
            [ROUTES.CommunityScreen]: 'account-group-outline',
          };
          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HomeScreen} component={HomeStackNavigator} />
      <Tab.Screen name={ROUTES.MovieScreen} component={MovieScreen} />
      <Tab.Screen name={ROUTES.TrailerScreen} component={TrailerScreen} />
      <Tab.Screen name={ROUTES.CommunityScreen} component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
