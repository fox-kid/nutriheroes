import { signInUser } from "../../api/auth";
import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGOUT } from "../types";

export const login = (username, password, callback) => {
  return (dispatch) => {
    signInUser(username, password)
      .then((res) => {
        dispatch(loginSuccess(res));
        callback();
      })
      .catch(() => dispatch(loginError()));
  };
};

export const loginSuccess = (data) => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    data: data,
  };
};

export const loginError = () => {
  return { type: AUTH_LOGIN_ERROR };
};

export const logout = () => {
  return { type: AUTH_LOGOUT };
};
