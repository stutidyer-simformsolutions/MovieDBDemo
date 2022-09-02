import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../constants';
import BottomTab from './Tabs';
import { CustomDrawer } from '../components';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.TabRoute}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        keyboardDismissMode: 'on-drag',
      }}
      backBehavior="history"
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <Drawer.Screen name={ROUTES.TabRoute} component={BottomTab} />
    </Drawer.Navigator>
  );
}
