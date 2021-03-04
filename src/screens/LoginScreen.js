import {Button, Input, Item, Text} from 'native-base';
import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {primary_color} from '../screens/styles';
import styles from './styles';
// import AuthModal from '../components/AuthModal';
import {loginAction} from '../redux/action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginBtn = async () => {
    try {
      const response = await dispatch(loginAction())
      
    } catch (error) {
      
    }
  }
  return (
    <View style={style.Container}>
      <Icon name="ios-american-football"/>
      <Text style={style.head}>LOGIN</Text>
      <Item>
        <Input
          placeholder="Username"
          onChangeText={(e) => setUsername(e)}
          placeholderTextColor="black"
        />
      </Item>
      <Item>
        <Input
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
          secureTextEntry
          placeholderTextColor="black"
        />
      </Item>
      <Button
        // disabled={loading}
        full
        onPress={() => dispatch(loginAction({username, password}))}>
        <Text>LOGIN</Text>
      </Button>
    </View>
  );
};
const style = StyleSheet.create({
  Container : {
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 200
  },
  head : {
    fontSize : 30
  }
})


export default LoginScreen;
