import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleware),
);

export default store;
