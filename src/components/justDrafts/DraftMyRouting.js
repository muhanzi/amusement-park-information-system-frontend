import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom"; // for routing
import ReactDOM from "react-dom";
//
import { createBrowserHistory } from "history";
import Programs from "../Components/programs";
import HomeComponent from "../homeComponent";
import Staff from "../Components/staff/staff";
import DraftComponent from "./draft";

const myhistory = createBrowserHistory(); // not working at all
ReactDOM.render(
  <Router history={myhistory}>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="programs" component={Programs} />
      <Route path="/draft" component={DraftComponent} />
    </Switch>
    {/* <Route path="staff" component={Staff} />  // Staff Component is not implemented that way   */}
  </Router>,
  document.getElementById("root")
);

export default myhistory;
