// import {local} from '../../../localip';
import axios from 'axios';
import {AUTH_FAILED, AUTH_START, AUTH_SUCCESS, NULLIFY_ERROR, LOGIN, AUTH_LOGOUT} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {fetchCartAction} from './cartAction';
// import {fetchTransactionAction} from './transactionAction';
// const url = `${local}/user`;

// /login
// /keep-login

// export const loginAction = (loginData) => {
//     return (dispatch) => {
//         try {
//             dispatch({
//                 type : AUTH_SUCCESS,
//                 payload : {username, password}
//             })
//             AsyncStorage.setItem('daa', loginData)
//         } catch (err) {
//             console.log(error);
//         }
//     }
// }

export const loginAction = (loginData) => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      const response = await axios.post( loginData);
      const {id, username,password ,token} = response.data; // .data udah default
      await AsyncStorage.setItem('token', token);
      dispatch({type: AUTH_SUCCESS, payload: {id, username,password}});
      dispatch(fetchCartAction(id));
      dispatch(fetchTransactionAction(id));
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.response.data.error});
    }
  };
};
export const logoutAction = () => {
    return (dispatch) => {
      try {
        AsyncStorage.clear();
        dispatch({
          type: AUTH_LOGOUT,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };

export const keepLoginAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      const asyncToken = await AsyncStorage.getItem('token');
      const response = await axios.post(
        `${url}/keep-login`,
        {},
        {
          headers: {
            Authorization: `Bearer ${asyncToken}`,
          },
        },
      );
      const {id, username, email, roleID, address} = response.data;
      dispatch({
        type: AUTH_SUCCESS,
        payload: {id, username, email, roleID, address},
      });
      dispatch(fetchCartAction(id));
      dispatch(fetchTransactionAction(id));
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.response.data.error});
    }
  };
};
