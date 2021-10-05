import ROUTES from "../constants/routes";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export default [
  {
    path: ROUTES.ROUTE_DASHBOARD,
    exact: true,
    page: Dashboard,
  },
  {
    path: ROUTES.ROUTE_SIGN_UP,
    exact: false,
    page: SignUp,
    authPage: true,
  },
  {
    path: ROUTES.ROUTE_LOGIN,
    exact: false,
    page: Login,
    authPage: true,
  },
];
