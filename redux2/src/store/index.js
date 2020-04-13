import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";

//reducer is connected to store
//newly promiseMiddleware is added to resolve the update state

let store = createStore(reducers, applyMiddleware(promiseMiddleware));

export default store;
