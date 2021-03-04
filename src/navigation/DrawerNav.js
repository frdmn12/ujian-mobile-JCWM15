import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LogoutScreen, ProfileScreen} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen
        name="LogoutDrawer"
        options={{title: 'Logout'}}
        component={LogoutScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
