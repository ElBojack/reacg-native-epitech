import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

export default function authReducer(state = false, action) {
  const { type } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
