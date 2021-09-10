import ROUTES from "./config/routes.js";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={ROUTES.ROUTE_DASHBOARD} exact>
          <Dashboard />
        </Route>
        <Route path={ROUTES.ROUTE_LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.ROUTE_SIGN_UP}>
          <SignUp />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
