import { AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../types";

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      const { data } = action.data;
      localStorage.setItem("token", data.accessToken);
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("accessToken");
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
