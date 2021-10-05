// import {
//   IS_USER_LOGGED_IN,
//   LOGIN_USER_ERROR,
//   LOGIN_USER_SUCCESS,
// } from "../types";

// const initialState = {
//   user: {},
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case IS_USER_LOGGED_IN: {
//       return {
//         ...state,
//         user: {
//           isLoggedIn: localStorage.get("accessToken") ? true : false,
//         },
//       };
//     }
//     case LOGIN_USER_SUCCESS: {
//       return {
//         ...state,
//         userInfo: action.data,
//       };
//     }
//     case LOGIN_USER_ERROR: {
//       return {
//         ...state,
//         userInfo: null,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
