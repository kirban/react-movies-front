import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
console.log(store.getState())

export default store;
