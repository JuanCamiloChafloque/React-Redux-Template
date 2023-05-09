import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/auth.css";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
