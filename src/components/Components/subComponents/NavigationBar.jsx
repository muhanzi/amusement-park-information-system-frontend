import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Project from "../subComponents/MyStatic";
import MyGoogleFont from "../subComponents/myGoogleFont";

class Navigation extends Component {
  state = {};
  render() {
    return (
      // Navigation bar with react bootstrap
      /* <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar> */

      /*  bg="dark"   // property inside Navbar */

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: Project().projectColor }}
      >
        <Navbar.Brand href="#home">
          <MyGoogleFont text={Project().companyName} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" hidden>
              About
            </Nav.Link>
            <Nav.Link href="#pricing" hidden>
              Contact
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" hidden>
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#" eventKey="key1" hidden={this.props.hideNavLinks}>
              Programs
            </Nav.Link>
            <Nav.Link href="#" eventKey="key2" hidden={this.props.hideNavLinks}>
              Staff
            </Nav.Link>
            <Nav.Link href="#" eventKey="key3" hidden={this.props.hideNavLinks}>
              Reports
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
