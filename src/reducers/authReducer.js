import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
} from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
