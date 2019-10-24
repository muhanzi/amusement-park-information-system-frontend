import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom"; // for routing
import ReactDOM from "react-dom";
import Programs from "../programs";
import HomeComponent from "../../homeComponent";
import Staff from "../staff/staff";
import DraftComponent from "../../justDrafts/draft";
import WrongUrl from "./wrongUrl";

export const routeToComponent = componentDetails => {
  // you can call this function for example when a button is clicked
  const { ComponentName, propsValue } = componentDetails;
  switch (ComponentName) {
    case "HomeComponent":
      ReactDOM.render(
        <BrowserRouter>
          <HomeComponent />
        </BrowserRouter>,
        document.getElementById("root")
      );
      break;
    case "Programs":
      ReactDOM.render(
        <BrowserRouter>
          <Programs userEmail={propsValue} />
        </BrowserRouter>,
        document.getElementById("root")
      );
      break;
    case "Staff":
      ReactDOM.render(
        <BrowserRouter>
          <Staff />
        </BrowserRouter>,
        document.getElementById("root")
      );
      break;
    case "DraftComponent":
      ReactDOM.render(
        <BrowserRouter>
          <DraftComponent data={propsValue} />
        </BrowserRouter>,
        document.getElementById("root")
      );
      break;
    default:
      ReactDOM.render(
        <BrowserRouter>
          <WrongUrl />
        </BrowserRouter>,
        document.getElementById("root")
      );
  }
};

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        {/* because the path of this route is "/" it means when the app loads with "localhost:3000" this path will be used and it means the HomeComponent will be called */}
        <Route path="/programs" component={Programs} />
        <Route path="/staff" component={Staff} />
        <Route path="/draft" component={DraftComponent} />
        <Route component={WrongUrl} />
        {/* this route without path is like a default case for the switch  //in case someone types nonesense in the url */}
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoutes;
