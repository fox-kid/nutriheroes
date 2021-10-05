import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
let initialState = {};

const rootReducer = combineReducers({
  AuthReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
// export default createStore(commonReducer, initialState);
