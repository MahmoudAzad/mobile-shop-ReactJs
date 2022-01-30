import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "../reducers";

export const Store = createStore(Reducers,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

