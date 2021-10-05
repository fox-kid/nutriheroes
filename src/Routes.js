import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ROUTES_CONFIG from "./config/routes";

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        {ROUTES_CONFIG.map((route) => {
          const Page = route.page;

          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              protected={route.protected}
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
