import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import FloatingLabelInput from "react-floating-label-input";
import Programs from "../programs";
import { BrowserRouter } from "react-router-dom"; // for routing
import ReactDOM from "react-dom";
import Project from "./MyStatic";
import ApiUtils from "../../../MyAPI/APIUtils";
import { ACCESS_TOKEN } from "../../../MyAPI/constants";
import MyGoogleFont from "../subComponents/myGoogleFont.js";

class SignInDiv extends Component {
  state = {
    email: "",
    password: ""
  };
  mycenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  mystyle = { margin: "0 auto", maxWidth: 320, padding: "145px 0" }; // margin: "0 auto" // center horizontally // padding: "100px 0"  paddingTop and paddingBottom
  apiUtils = new ApiUtils();
  validateForm() {
    if (
      this.state.email.trim().replace(" ", "").length >= 3 &&
      this.state.password.length > 6
    ) {
      return true;
    } else {
      // alert(
      //   "email must have at least 5 characters and password must have at least 6"
      // );
      return false;
    }
  }
  handleChangeEmail = event => {
    // this function takes the event on the inputfield as parameter
    this.setState({
      email: event.target.value
    });
  };
  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  PerformLogin = event => {
    event.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
    event.stopPropagation();
    const loginRequest = {
      usernameOrEmail: this.state.email,
      password: this.state.password
    };
    this.apiUtils
      .login(Object.assign({}, loginRequest))
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        this.AfterLogin();
      })
      .catch(error => {
        if (error.status === 401) {
          alert("Your Username or Password is incorrect. Please try again!");
        } else {
          alert(
            error.message || "Sorry! Something went wrong. Please try again!"
          );
          // this.PerformLogin(); // recursion
        }
      });
  };
  AfterLogin() {
    ReactDOM.render(
      // works very well
      <BrowserRouter>
        <Programs userEmail={this.state.email} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div style={this.mystyle}>
        <form onSubmit={this.PerformLogin}>
          {/*  // using FormControl  !!!!!
           <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email} // when form is submitted
              onChange={this.handleChangeEmail}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChangePassword}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()} // if validateForm() returns false // this button will be disabled
            type="submit"
            className="btn btn-danger"
          >
            Login
          </Button> */}
          <FormGroup>
            <FloatingLabelInput
              id="UsernameId"
              label={<MyGoogleFont text="Username or Email" />}
              onBlur=""
              value={this.state.email}
              onChange={this.handleChangeEmail}
              style={{ fontSize: 15, fontFamilly: "sans-serif" }}
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelInput
              id="passwordId"
              label={<MyGoogleFont text="Password" />}
              onBlur=""
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              style={{ fontSize: 15 }}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()} // if validateForm() returns false // this button will be disabled
            type="submit"
            className="btn btn"
            style={{
              borderRadius: 16,
              backgroundColor: Project().projectColor
            }}
          >
            <MyGoogleFont text="Login" />
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInDiv;
