import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Medicines from "./components/medicines/medicines";
import Medicine from "./components/medicine/medicine";
import * as serviceWorker from "./serviceWorker";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/medicines/" component={Medicines} />
      <Route exact path="/medicines/:id" component={Medicine} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
