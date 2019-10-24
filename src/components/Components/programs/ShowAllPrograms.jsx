import React, { Component } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import ApiUtils from "../../../MyAPI/APIUtils.js";
import MyGoogleFont from "../subComponents/myGoogleFont";
import Project from "../subComponents/MyStatic.js";
import "../subComponents/stylefile.css";
import AuditoriumMgt from "./auditoriumMgt";
import Pirates from "./PiratesShip";
import Swimming from "./SwimmingPool";
//import { useAlert } from "react-alert";

class ShowAll extends Component {
  // this component will manage others // auditorium// pirates ship//...
  state = {
    CurrentUserLoggedIn: this.props.userEmail,
    CurrentComponent: "",
    userIsAdmin: false,
    allProgramsDetails: ""
  };

  checkCurrentUser() {
    // in case someone just enter localhost:3000/programs    // in a new tab
    // okay, here there is no need to check if there a current user since this is being checked inside component "Programs"
    // we just do it here to get the user's name in case it not provided in the props // for example use just opens localhost:3000/programs   in a new tab
    if (!this.props.userEmail) {
      this.apiUtils
        .getCurrentUser()
        .then(response => {
          //
          this.setState({
            CurrentComponent: <Pirates userEmail={response.username} />,
            CurrentUserLoggedIn: response.username
          });
          //
        })
        .catch(error => {});
    }
  }

  componentWillMount() {
    this.checkCurrentUser();
    this.apiUtils
      .getCurrentUserAdmin()
      .then(response => {
        // user is an administrator
        this.setState({ userIsAdmin: true });
      })
      .catch(error => {});
    // get info about all programs
    this.getProgramsDetails();
  }

  apiUtils = new ApiUtils();
  myStyle = {
    spanStyle: {
      fontSize: 18,
      display: "flex",
      backgroundColor: Project().projectSupportColor,
      color: "white",
      marginBottom: 20
    },
    spanStyle2: {
      fontSize: 22,
      display: "flex",
      backgroundColor: Project().projectSupportColor,
      color: "white",
      marginBottom: 20
    }
  };

  ReturnComponent1 = () => {
    this.setState({
      CurrentComponent: (
        <Pirates
          userEmail={this.props.userEmail}
          details={this.filterPrograms("pirate ship")}
        />
      )
    });
  };
  ReturnComponent2 = () => {
    this.setState({
      CurrentComponent: (
        <AuditoriumMgt details={this.filterPrograms("auditorium")} />
      )
    });
  };
  ReturnComponent3 = () => {
    this.setState({
      CurrentComponent: (
        <Swimming details={this.filterPrograms("swimming pool")} />
      )
    });
  };

  GoToComponent = eventKey => {
    switch (eventKey) {
      case "PirateShipKey":
        this.ReturnComponent1();
        break;
      case "AuditoriumKey":
        this.ReturnComponent2();
        break;
      case "Swimmingkey":
        this.ReturnComponent3();
        break;
      default:
        this.ReturnComponent2();
    }
  };

  getProgramsDetails() {
    // api call // get info about all programs
    this.apiUtils
      .AllPrograms()
      .then(response => {
        let pirateShip = response.filter(program => {
          if (program.programName === "pirate ship") {
            return program;
          }
        });
        this.setState({
          allProgramsDetails: response,
          CurrentComponent: (
            <Pirates userEmail={this.props.userEmail} details={pirateShip[0]} />
          )
        });
      })
      .catch(error => {});
  }

  filterPrograms(Name) {
    let programDetails = this.state.allProgramsDetails.filter(program => {
      if (program.programName === Name) {
        return program;
      }
    });
    return programDetails[0]; // we get the first element of the array because when you filter an array it will return only those elements that matched with the condition
  }

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row //noGutters={true}
          >
            {/* //noGutters={true} //Removes the gutter spacing between Cols as well as any added negative margins. */}
            <Col
              md={3}
              style={{
                borderRight: "0.75px solid " + Project().projectColor,
                backgroundColor: Project().projectThinWhiteColor,
                padding: "30px 15px 15px 15px",
                minHeight: 500
              }}
            >
              {/* <center> */}
              <span style={this.myStyle.spanStyle} className="badge badge m-2">
                <MyGoogleFont text="All Company's Programs" />
              </span>
              {/* </center> */}
              <Nav
                defaultActiveKey="PirateShipKey"
                className="flex-column"
                variant="pills"
                onSelect={this.GoToComponent}
              >
                <Nav.Link eventKey="Footballkey">
                  <MyGoogleFont text="Football Pitch" />
                </Nav.Link>
                <Nav.Link eventKey="Basketballkey">
                  <MyGoogleFont text="Basketball Pitch" />
                </Nav.Link>
                <Nav.Link eventKey="Volleyballkey">
                  <MyGoogleFont text="Volleyball Pitch" />
                </Nav.Link>
                <Nav.Link eventKey="Swimmingkey">
                  <MyGoogleFont text="Swimming Pool" />
                </Nav.Link>
                <Nav.Link eventKey="AuditoriumKey">
                  <MyGoogleFont text="Auditorium" />
                </Nav.Link>
                <Nav.Link eventKey="PirateShipKey">
                  <MyGoogleFont text="Pirate Ship" />
                </Nav.Link>
                {/* <Nav.Link
                  eventKey="Addprogramkey"
                  hidden={!this.state.userIsAdmin} // if this.state.userIsAdmin is equal to true // then don't hide this Nav.Link
                >
                  <MyGoogleFont text="Add Program" />
                </Nav.Link> */}
              </Nav>
            </Col>
            <Col
              md={9}
              style={{
                borderLeft: "1px solid " + Project().projectColor,
                padding: "5px 0px 0px 0px",
                minHeight: 500
              }}
            >
              <div>{this.state.CurrentComponent}</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ShowAll;
