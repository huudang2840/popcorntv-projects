import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "react-redux";
import store from "../src/redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
