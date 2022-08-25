import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ROUTES } from '../constants';
import { CommunityScreen, MovieScreen, TrailerScreen } from '../modules';
import { HomeStackNavigator } from './AppNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type BottomTabNavigatorParamList = {
  [ROUTES.HomeScreen]: undefined;
  [ROUTES.MovieScreen]: undefined;
  [ROUTES.TrailerScreen]: undefined;
  [ROUTES.CommunityScreen]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const tabBarLabel = {
  [ROUTES.HomeScreen]: 'Home',
  [ROUTES.MovieScreen]: 'Movie',
  [ROUTES.TrailerScreen]: 'Trailer',
  [ROUTES.CommunityScreen]: 'Community',
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HomeScreen}
      screenOptions={({ route }) => ({
        tabBarLabel: tabBarLabel[route.name],
        headerShown: false,
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
