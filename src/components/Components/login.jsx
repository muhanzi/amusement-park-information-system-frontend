import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import imageBackground from "../../images/trialimage.png";
import wonderworld from "../../images/wonderworldphoto.jpg";
import SignInDiv from "./subComponents/signInForm.js";
import Project from "./subComponents/MyStatic.js";

class Login extends Component {
  state = {};
  mystylesObject = {
    mycenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    centerMyRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: this.checkScreenWidth().margintop
    },
    signInBorder: {
      backgroundColor: "white",
      height: 450,
      borderTopRightRadius: this.checkScreenWidth().radius,
      borderBottomRightRadius: this.checkScreenWidth().radius,
      borderRight: "0.5px solid " + Project().projectColor,
      borderTop: "0.5px solid " + Project().projectColor,
      borderBottom: "0.5px solid " + Project().projectColor
    },
    signInBackgroundImage: {
      backgroundImage: `url(${wonderworld})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 450,
      borderTopLeftRadius: this.checkScreenWidth().radius,
      borderBottomLeftRadius: this.checkScreenWidth().radius
    }
  };

  checkScreenWidth() {
    //console.log("platform screen Width= ", window.screen.availWidth);  // width of the available screen
    if (window.screen.availWidth < 400) {
      return { margintop: 0, radius: 0 }; // for small platforms (phones)  // we remove the margin top
    } else {
      return { margintop: 40, radius: 50 }; // for big platforms (computers,ipads,...)  // we remove the margin top
    }
  }

  // Design comments  // !!!!!!!!!!!!!
  // npm install react-bootstrap bootstrap    // to add react-bootstrap in a react project
  // to put a border // className="block-example border border-danger"
  // npm install mdbreact // command to add material design bootstrap for react
  // npm i react-floating-label-input  // add also // npm i styled-components
  // npm install --save react-google-font-loader  // to add googgle fonts in the react project
  // npm i react-box-shadow  // a dependency to use boxShadow in reactJS  //  !!!!!!!!!!! not working
  // npm install @material-ui/core // will use it to put boxShadow on card
  // npm install jquery  // to add jquery in our react project
  // npm i react-alert // plugin for alerts
  // npm i react-router
  // !!! In React, names starting with a capital letter will compile to the createComponent method
  // !!! Element names that start with a lowercase letter refers to built in components (or HTML elements) such as div and span tags
  // !!! so a component name must start with capital letter  // <ComponentName/>
  render() {
    this.checkScreenWidth();
    return (
      <div>
        <Container>
          <Row style={this.mystylesObject.centerMyRow}>
            <Col style={this.mystylesObject.signInBackgroundImage} sm={4}></Col>
            <Col style={this.mystylesObject.signInBorder} sm={4}>
              <SignInDiv />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
