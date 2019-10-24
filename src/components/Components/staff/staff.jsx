import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Nav,
  FormGroup
} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import FloatingLabelInput from "react-floating-label-input";
import Project from "../subComponents/MyStatic.js";
import MyGoogleFont from "../subComponents/myGoogleFont";
import "../subComponents/stylefile.css";
import $ from "jquery";
import { Checkbox } from "@material-ui/core";
import ApiUtils from "../../../MyAPI/APIUtils.js";

class Staff extends Component {
  state = {
    CurrentComponent: "",
    AddUsermodalStatus: false,
    addUser: {
      AddName: "",
      AddUseremail: "",
      AddUsername: "",
      AddUserpassword: ""
    },
    userIsAdmin: false,
    myCheckBox: false
  };
  apiUtils = new ApiUtils();
  myStyle = {
    buttonStyle: {
      backgroundColor: Project().projectColor,
      color: "white"
    },
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
    },
    AddUserModalStyle: {}
  };
  formInputsIDs = [
    "AddUserpasswordId",
    "AddUsernameId",
    "AddUserEmailId",
    "nameId"
  ];

  ReturnComponent1() {}

  GoToComponent = eventKey => {
    switch (eventKey) {
      case "AddUserKey":
        this.ShowAddUserModal();
        break;
      default:
        this.ReturnComponent1();
    }
  };

  ShowAddUserModal = () => {
    this.setState({ AddUsermodalStatus: true });
  };

  HideAddUserModal = () => {
    this.setState({ AddUsermodalStatus: false });
  };

  validateForm() {
    if (
      this.state.addUser.AddName.trim().length > 1 &&
      this.state.addUser.AddUseremail.trim().replace(" ", "").length > 5 &&
      this.state.addUser.AddUsername.trim().replace(" ", "").length > 1 &&
      this.state.addUser.AddUserpassword.length > 6
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleChangeName = event => {
    this.setState({
      addUser: {
        // we don't want to change other values inside the object  // so that the condition inside function validateForm() will still be valid
        AddName: event.target.value,
        AddUseremail: this.state.addUser.AddUseremail,
        AddUsername: this.state.addUser.AddUsername,
        AddUserpassword: this.state.addUser.AddUserpassword
      }
    });
  };
  handleChangeEmail = event => {
    // this function takes the event on the inputfield as parameter
    this.setState({
      addUser: {
        AddUseremail: event.target.value, // only email is changing
        AddName: this.state.addUser.AddName, // current value of AddName
        AddUsername: this.state.addUser.AddUsername,
        AddUserpassword: this.state.addUser.AddUserpassword
      }
    });
  };
  handleChangeUsername = event => {
    this.setState({
      addUser: {
        AddUsername: event.target.value, //
        AddName: this.state.addUser.AddName,
        AddUseremail: this.state.addUser.AddUseremail,
        AddUserpassword: this.state.addUser.AddUserpassword
      }
    });
  };
  handleChangePassword = event => {
    this.setState({
      addUser: {
        AddUserpassword: event.target.value, //
        AddName: this.state.addUser.AddName,
        AddUseremail: this.state.addUser.AddUseremail,
        AddUsername: this.state.addUser.AddUsername
      }
    });
  };
  PerformSignUp = event => {
    event.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
    event.stopPropagation();
    const signUpRequest = {
      name: this.state.addUser.AddName,
      username: this.state.addUser.AddUsername,
      email: this.state.addUser.AddUseremail,
      password: this.state.addUser.AddUserpassword
    };
    if ($("#checkboxID").is(":checked")) {
      this.apiUtils
        .AdminSignup(Object.assign({}, signUpRequest))
        .then(response => {
          if (response.success === true) {
            // 'success' is a boolean
            //1. empty fields // using jquery  ids
            this.formInputsIDs.forEach(id => {
              $("#" + id).val(""); // set value to empty
            });
            //2. uncheck the checkbox
            //$("#checkboxID").prop("checked", false);//not working
            this.checkboxChanged();
            //3. close modal
            //this.HideAddUserModal();  // should not close immediately coz someone might want to add another user
            //4. display alert // with 'response.message'
            alert(response.message);
            // this.MyAlert.success(response.message);  // react-alert plugin
          } else {
            alert(response.message);
            //this.MyAlert.error(response.message);
          }
        })
        .catch(error => {
          // alert
          alert("failed to add a new user ! Please try again");
          //this.MyAlert.error("failed to add a new user ! Please try again");
        });
    } else {
      this.apiUtils
        .signup(Object.assign({}, signUpRequest))
        .then(response => {
          if (response.success === true) {
            // 'success' is a boolean
            //1. empty fields // using jquery  ids
            this.formInputsIDs.forEach(id => {
              $("#" + id).val(""); // set value to empty
            });
            //2. close modal
            //  this.HideAddUserModal(); // should not close immediately coz someone might want to add another user
            //3. display alert // with 'response.message'
            alert(response.message);
            // this.MyAlert.success(response.message);
          } else {
            alert(response.message);
            //this.MyAlert.error(response.message);
          }
        })
        .catch(error => {
          // alert
          alert("failed to add a new user ! Please try again");
          //this.MyAlert.error("failed to add a new user ! Please try again");
        });
    }
  };
  checkboxChanged = () => {
    this.setState({ myCheckBox: !this.state.myCheckBox }); // like I just update to its opposite current value
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col
              md={3}
              style={{
                borderRight: "0.75px solid " + Project().projectColor,
                backgroundColor: Project().projectThinWhiteColor,
                padding: "30px 15px 15px 15px",
                height: 500
              }}
            >
              <span style={this.myStyle.spanStyle} className="badge badge m-2">
                <MyGoogleFont text="Manage Staff" />
              </span>
              <Nav
                defaultActiveKey="SeeAllUsers"
                className="flex-column"
                variant="pills"
                onSelect={this.GoToComponent}
              >
                <Nav.Link eventKey="AddUserKey">
                  <MyGoogleFont text="Add User" />
                </Nav.Link>
                <Nav.Link eventKey="RemoveUser">
                  <MyGoogleFont text="Delete User" />
                </Nav.Link>
                <Nav.Link eventKey="SeeAllUsers">
                  <MyGoogleFont text="All Users" />
                </Nav.Link>
              </Nav>
            </Col>
            <Col
              md={9}
              style={{
                borderLeft: "1px solid " + Project().projectColor,
                padding: "5px 0px 0px 0px",
                height: 500
              }}
            >
              <div style={{ paddingLeft: 20 }}>
                {
                  // this.state.CurrentComponent
                }
                <h2>Staff Here !</h2>
              </div>
            </Col>
          </Row>
        </Container>
        {/* popup window */}
        <Modal
          show={this.state.AddUsermodalStatus}
          onHide={this.HideAddUserModal} // when the closeButton 'X'  is clicked
          centered
          style={this.myStyle.AddUserModalStyle}
        >
          <form onSubmit={this.PerformSignUp}>
            <Modal.Header closeButton>
              <Modal.Title>
                <span
                  style={this.myStyle.spanStyle2}
                  className="badge badge m-2"
                >
                  <MyGoogleFont text="Add User" />
                </span>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                <FormGroup>
                  <FloatingLabelInput
                    id="nameId"
                    label={<MyGoogleFont text="Name" />}
                    onBlur=""
                    value={this.state.AddName}
                    onChange={this.handleChangeName}
                    style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                  />
                </FormGroup>
                <FormGroup>
                  <FloatingLabelInput
                    id="AddUserEmailId"
                    label={<MyGoogleFont text="Email" />}
                    type="email"
                    onBlur=""
                    value={this.state.AddUseremail}
                    onChange={this.handleChangeEmail}
                    style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                  />
                </FormGroup>
                <FormGroup>
                  <FloatingLabelInput
                    id="AddUsernameId"
                    label={<MyGoogleFont text="Username" />}
                    onBlur=""
                    value={this.state.AddUsername}
                    onChange={this.handleChangeUsername}
                    style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                  />
                </FormGroup>
                <FormGroup>
                  <FloatingLabelInput
                    id="AddUserpasswordId"
                    label={<MyGoogleFont text="Password" />}
                    onBlur=""
                    type="password"
                    value={this.state.AddUserpassword}
                    onChange={this.handleChangePassword}
                    style={{ fontSize: 15 }}
                  />
                </FormGroup>
                <Checkbox
                  color="primary"
                  id="checkboxID"
                  onChange={this.checkboxChanged}
                  checked={this.state.myCheckBox}
                />
                Make this user an Admin ?
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.HideAddUserModal}>
                <MyGoogleFont text="Close" />
              </Button>
              <MDBBtn
                style={this.myStyle.buttonStyle}
                disabled={!this.validateForm()}
                type="submit"
              >
                <MyGoogleFont text="Save User Details" />
              </MDBBtn>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Staff;
