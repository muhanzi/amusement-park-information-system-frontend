import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom"; // for routing
import ReactDOM from "react-dom";
import Login from "./Components/login.jsx";
import Navigation from "./Components/subComponents/NavigationBar";
import ApiUtils from "../MyAPI/APIUtils.js";
import Programs from "./Components/programs.jsx";
import { routeToComponent } from "./Components/subComponents/MyRouting.js";

class HomeComponent extends Component {
  state = {
    hide: true
  };
  apiUtils = new ApiUtils();
  constructor() {
    super();
    this.checkUser();
  }

  checkUser = () => {
    // first verify if there is a current user
    this.apiUtils
      .getCurrentUser()
      .then(response => {
        ReactDOM.render(
          <BrowserRouter>
            <Programs userEmail={response.username} />
          </BrowserRouter>,
          document.getElementById("root")
        );
      })
      .catch(error => {
        this.setState({ hide: false });
      });
  };

  keepCheckingUser() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        this.apiUtils
          .getCurrentUser()
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      }, 1830000); //test it with ninty seconds -->      90000
    });
  }

  GoToHomePage() {
    const obj = {
      ComponentName: "HomeComponent",
      propsValue: ""
    };
    routeToComponent(obj);
  }

  render() {
    // we can remove this feature   // or I use on constant and be updating it every time someone clicks oon a button // on every event we set it to true // only when the variable is false than we check if user is inactive
    this.keepCheckingUser()
      .then(resolved => {
        //alert(resolved.username);
      })
      .catch(rejected => {
        //alert(rejected);
        this.apiUtils.Logout();
        this.GoToHomePage();
      });
    return (
      <div
        style={{ backgroundColor: "#eee", height: "100vh" }}
        hidden={this.state.hide}
      >
        <Navigation hideNavLinks={true} />
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
