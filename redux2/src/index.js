import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import Router from "./component/Routing";
import { Provider } from "react-redux";

// We are conecting store with view using provider
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
