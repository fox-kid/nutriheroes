import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ROUTES_CONFIG from "./config/routes";
import { useSelector } from "react-redux";

function Routes() {
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <Header />
      <Switch>
        {ROUTES_CONFIG.map((route) => {
          const Page = route.page;
          console.log(isLoggedIn, route.authPage);

          if (isLoggedIn && route.authPage) {
            return;
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(props) => <Page {...props} />}
            />
          );
        })}
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
