import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./container/App";
import { Provider } from "react-redux";

// We are conecting store with view using provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
