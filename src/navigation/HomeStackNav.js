import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, CovidScreen} from '../screens';

const Stack = createStackNavigator();
const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Covid" component={CovidScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
