import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import App from "./App";
import { createStore } from "redux";
const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
