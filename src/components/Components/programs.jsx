import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import ShowAll from "./programs/ShowAllPrograms";
import Project from "./subComponents/MyStatic";
import MyGoogleFont from "./subComponents/myGoogleFont";
import Staff from "./staff/staff.jsx";
import Reports from "./reports/reports";
import MyFooter from "./subComponents/footer";
import ApiUtils from "../../MyAPI/APIUtils";
import { routeToComponent } from "./subComponents/MyRouting";

class Programs extends Component {
  state = {
    CurrentComponent: <ShowAll userEmail={this.props.userEmail} />,
    activeKey: "key1",
    showNav: true
  };

  apiUtils = new ApiUtils();

  ReturnComponent1 = () => {
    this.setState({
      CurrentComponent: <ShowAll userEmail={this.props.userEmail} />,
      activeKey: "key1"
    });
  };
  ReturnComponent2 = () => {
    this.setState({ CurrentComponent: <Staff />, activeKey: "key2" });
  };
  ReturnComponent3 = () => {
    this.setState({ CurrentComponent: <Reports />, activeKey: "key3" });
  };
  CallLogout = () => {
    this.setState({ activeKey: "key4" });
    this.apiUtils.Logout();
  };

  GoToComponent = eventKey => {
    switch (eventKey) {
      case "key1":
        this.ReturnComponent1();
        break;
      case "key2":
        this.ReturnComponent2();
        break;
      case "key3":
        this.ReturnComponent3();
        break;
      case "key4":
        this.CallLogout();
        break;
      default:
        this.ReturnComponent2();
    }
  };

  checkCurrentUser() {
    this.apiUtils
      .getCurrentUser()
      .then(response => {})
      .catch(error => {
        routeToComponent({ ComponentName: "HomeComponent", propsValue: "" });
      });
  }

  componentWillMount() {
    this.checkCurrentUser();
    this.apiUtils
      .getCurrentUserAdmin()
      .then(response => {
        this.setState({ showNav: false }); // only admin should access Staff component
      })
      .catch(error => {
        this.setState({ showNav: true });
      });
  }

  render() {
    return (
      <div>
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
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav activeKey={this.state.activeKey} onSelect={this.GoToComponent}>
              <Nav.Link
                href="#"
                eventKey="key1"
                //onSelect={this.ReturnComponent1}
              >
                <MyGoogleFont text="Programs" />
              </Nav.Link>
              <Nav.Link
                href="#"
                eventKey="key2"
                //onSelect={this.ReturnComponent2}
                hidden={this.state.showNav}
              >
                <MyGoogleFont text="Staff" />
              </Nav.Link>
              <Nav.Link
                href="#"
                eventKey="key3"
                //onSelect={this.ReturnComponent3}
              >
                <MyGoogleFont text="Reports" />
              </Nav.Link>
              <Nav.Link
                href="/" // route to home component  // MyRouting.js // --> MyRoutes
                eventKey="key4"
              >
                <MyGoogleFont text="Logout" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* here we shall have two col in a row // on that list all programs // another one displays the current program */}
        <div>{this.state.CurrentComponent}</div>
        <MyFooter />
      </div>
    );
  }
}

export default Programs;
