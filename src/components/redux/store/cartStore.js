import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "../reducers/cartReducer";

export const cartStore = createStore(CartReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))