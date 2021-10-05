import Routes from "./Routes";
import store from "./redux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
