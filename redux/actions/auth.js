import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

export const register = (auth, email, password) => (dispatch) => createUserWithEmailAndPassword(
  auth, email, password,
).then((/* response */) => {
  dispatch({
    type: REGISTER_SUCCESS,
  });

  return Promise.resolve();
},
() => {
  dispatch({
    type: REGISTER_FAIL,
  });

  return Promise.reject();
});

export const login = (auth, email, password) => (dispatch) => signInWithEmailAndPassword(
  auth, email, password,
).then(
  (data) => {
    if (data) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    }

    return Promise.resolve();
  },
  () => {
    dispatch({
      type: LOGIN_FAIL,
    });

    return Promise.reject();
  },
);

export const logout = (auth) => (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: LOGOUT,
    });

    return Promise.resolve();
  }, () => Promise.reject());
};
