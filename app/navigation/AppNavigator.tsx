import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ROUTES } from '../constants';
import { navigationRef } from '../services';
import { ApplicationStyles } from '../theme';
import DrawerNavigator from './Drawer';

export type RootStackParamList = {
  [ROUTES.HomeScreen]: undefined;
};

const AppNavigation: FC = () => {
  return (
    <SafeAreaView
      edges={['right', 'top', 'left']}
      style={ApplicationStyles.screen}>
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
