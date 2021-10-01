// import { useReducer } from "react";
import { signInUser } from "../api/auth";

// const [state, dispatch] = useReducer(reducer, initialState);

const initialState = {
  isLoggenIn: false,
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOGIN": {
      return {
        ...state,
        isLoggenIn: true,
        // user: action.payload ??
      };
    }
    case "AUTH_LOGOUT": {
      return {
        ...state,
        isLoggenIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
}

async function login(username, password) {
  const response = await signInUser(username, password);
  const { token } = response.data;
  localStorage.setItem("accessToken", token.accessToken);
  // dispatch(authLogin(token.accessToken));
}

function logout() {
  localStorage.removeItem("accessToken");
}

// function authLogin(user) {
//   return {
//     type: "AUTH_LOGIN",
//     payload: {
//       user,
//     },
//   };
// }

export { initialState, reducer, login, logout };
