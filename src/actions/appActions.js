import axios from "axios";
import {
  APP_MESSAGE_FAIL,
  APP_MESSAGE_REQUEST,
  APP_MESSAGE_SUCCESS,
} from "../constants/appConstants";

export const getAppMessage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: APP_MESSAGE_REQUEST,
    });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
    };

    const { data } = await axios.get("/api/v1/app", config);

    dispatch({
      type: APP_MESSAGE_SUCCESS,
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: APP_MESSAGE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
