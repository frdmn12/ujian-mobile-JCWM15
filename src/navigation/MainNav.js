import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import HomeNav from './HomeNav';
import {keepLoginAction} from '../redux/action';
// import ProfileDrawer from './ProfileDrawer';
import DrawerNav from './DrawerNav'
import { LoginScreen } from '../screens';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLoginAction());
  }, [dispatch]);
  const {isSignedIn} = useSelector((state) => state.auth);
  return <>{isSignedIn ? <DrawerNav /> : <LoginScreen />}</>;
};

export default Main;
