// import {
//   IS_USER_LOGGED_IN,
//   LOGIN_USER_ERROR,
//   LOGIN_USER_SUCCESS,
// } from "../types";
// import { signInUser } from "../../api/auth";

// export const isUserLoggedIn = () => {
//   return {
//     type: IS_USER_LOGGED_IN,
//   };
// };

// export const UserLoginSuccess = (data) => {
//   return {
//     type: LOGIN_USER_SUCCESS,
//     data,
//   };
// };

// export const UserLoginError = () => {
//   return {
//     type: LOGIN_USER_ERROR,
//   };
// };

// export const login = (username, password) => {
//   // eslint-disable-next-line no-unused-vars
//   return (dispatch, state) => {
//     signInUser(username, password)
//       .then((res) => {
//         dispatch(UserLoginSuccess(res));
//         console.log(res);
//         toggleSession(res);
//       })
//       .catch(() => {
//         dispatch(UserLoginError());
//       });
//   };
// };

// export const logout = () => {
//   toggleSession(null);
// };

// function toggleSession(accessToken) {
//   if (accessToken) {
//     localStorage.setItem("accessToken", accessToken);
//   } else {
//     localStorage.removeItem("accessToken");
//   }
// }
