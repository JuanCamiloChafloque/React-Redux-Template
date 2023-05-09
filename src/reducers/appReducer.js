import {
  APP_MESSAGE_FAIL,
  APP_MESSAGE_REQUEST,
  APP_MESSAGE_SUCCESS,
} from "../constants/appConstants";

export const appReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case APP_MESSAGE_REQUEST:
      return {
        loading: true,
      };

    case APP_MESSAGE_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };

    case APP_MESSAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
