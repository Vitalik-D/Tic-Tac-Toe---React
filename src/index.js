import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Root />
  </HashRouter>,
  document.getElementById("root")
);
