import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen} from '../screens';
import {Icon} from 'react-native-elements';
import {DrawerNav, HomeStackNav} from '.';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'info';
          }
          return <Icon name={iconName} type="material" color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNav} />
      <Tab.Screen name="Profile" component={DrawerNav} />
    </Tab.Navigator>
  );
};

export default TabNav;
