import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/action';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <Button title="Logout" onPress={() => dispatch(logoutAction())} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
