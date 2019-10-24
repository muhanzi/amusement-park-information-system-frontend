import React, { Component } from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import HomeComponent from "../homeComponent";
import DraftComponent from "./draft";

class RouteComponent extends Component {
  state = {};
  myhistory = createBrowserHistory();
  render() {
    return (
      <Router history={this.myhistory}>
        <Route path={"/"} Component={HomeComponent} />
        <Route path={"draft"} Component={DraftComponent} />
      </Router>
    );
  }
}

export default RouteComponent;
