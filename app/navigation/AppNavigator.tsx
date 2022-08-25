import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ROUTES } from '../constants';
import { HomeScreen } from '../modules';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationRef } from '../services';
import BottomTab from './Tabs';
import { ApplicationStyles } from '../theme';

export type RootStackParamList = {
  [ROUTES.HomeScreen]: undefined;
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.HomeScreen}>
      <HomeStack.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AppNavigation: FC = () => {
  return (
    <SafeAreaView
      edges={['right', 'top', 'left']}
      style={ApplicationStyles.screen}>
      <NavigationContainer ref={navigationRef}>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
