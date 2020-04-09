import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

//reducer is connected to store

let store = createStore(reducer, applyMiddleware());

export default store;
