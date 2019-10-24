import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./components/homeComponent.jsx";
import Prgrams from "./components/Components/programs";
import Staff from "./components/Components/staff/staff";
import MyRoutes from "./components/Components/subComponents/MyRouting";

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<HomeComponent />, document.getElementById("root"));
ReactDOM.render(<MyRoutes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
