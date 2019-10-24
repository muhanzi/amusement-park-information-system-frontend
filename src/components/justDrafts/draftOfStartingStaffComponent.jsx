// import React, { Component } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Modal,
//   Button,
//   Nav,
//   FormGroup
// } from "react-bootstrap";
// import { MDBBtn } from "mdbreact";
// import FloatingLabelInput from "react-floating-label-input";
// import Project from "../subComponents/MyStatic.js";
// import MyGoogleFont from "../subComponents/myGoogleFont";
// import "../subComponents/stylefile.css";
// import $ from "jquery";
// import { Checkbox } from "@material-ui/core";
// import ApiUtils from "../../../MyAPI/APIUtils.js";

// class Staff extends Component {
//   state = {
//     CurrentComponent: "",
//     AddUsermodalStatus: false,
//     addUser: {
//       AddName: "",
//       AddUseremail: "",
//       AddUsername: "",
//       AddUserpassword: ""
//     },
//     userIsAdmin: false,
//     myCheckBox: false
//   };
//   apiUtils = new ApiUtils();
//   myStyle = {
//     buttonStyle: {
//       backgroundColor: Project().projectColor,
//       color: "white"
//     },
//     spanStyle: {
//       fontSize: 18,
//       display: "flex",
//       backgroundColor: Project().projectSupportColor,
//       color: "white",
//       marginBottom: 20
//     },
//     spanStyle2: {
//       fontSize: 22,
//       display: "flex",
//       backgroundColor: Project().projectSupportColor,
//       color: "white",
//       marginBottom: 20
//     },
//     AddUserModalStyle: {}
//   };
//   formInputsIDs = [
//     "AddUserpasswordId",
//     "AddUsernameId",
//     "AddUserEmailId",
//     "nameId"
//   ];
//   render() {
//     return (
//       <div>
//         <Container fluid={true}>
//           <Row>
//             <Col
//               md={3}
//               style={{
//                 borderRight: "0.75px solid " + Project().projectColor,
//                 backgroundColor: Project().projectThinWhiteColor,
//                 padding: "30px 15px 15px 15px"
//               }}
//             >
//               <span style={this.myStyle.spanStyle} className="badge badge m-2">
//                 <MyGoogleFont text="Manage Staff" />
//               </span>
//               <Nav
//                 defaultActiveKey="AddUserKey"
//                 className="flex-column"
//                 variant="pills"
//                 onSelect={this.GoToComponent}
//               >
//                 <Nav.Link eventKey="AddUserKey">
//                   <MyGoogleFont text="Add User" />
//                 </Nav.Link>
//               </Nav>
//             </Col>
//             <Col
//               md={9}
//               style={{
//                 borderLeft: "1px solid " + Project().projectColor,
//                 padding: "5px 0px 0px 0px"
//               }}
//             >
//               <div>
//                 {
//                   // this.state.CurrentComponent
//                 }
//                 <h2>Staff Here !</h2>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         {/* popup window */}
//         <Modal
//           show={this.state.AddUsermodalStatus}
//           onHide={this.HideAddUserModal} // when the closeButton 'X'  is clicked
//           centered
//           style={this.myStyle.AddUserModalStyle}
//         >
//           <form onSubmit={this.PerformSignUp}>
//             <Modal.Header closeButton>
//               <Modal.Title>
//                 <span
//                   style={this.myStyle.spanStyle2}
//                   className="badge badge m-2"
//                 >
//                   <MyGoogleFont text="Add User" />
//                 </span>
//               </Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <p>
//                 <FormGroup>
//                   <FloatingLabelInput
//                     id="nameId"
//                     label={<MyGoogleFont text="Name" />}
//                     onBlur=""
//                     value={this.state.AddName}
//                     onChange={this.handleChangeName}
//                     style={{ fontSize: 15, fontFamilly: "sans-serif" }}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <FloatingLabelInput
//                     id="AddUserEmailId"
//                     label={<MyGoogleFont text="Email" />}
//                     type="email"
//                     onBlur=""
//                     value={this.state.AddUseremail}
//                     onChange={this.handleChangeEmail}
//                     style={{ fontSize: 15, fontFamilly: "sans-serif" }}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <FloatingLabelInput
//                     id="AddUsernameId"
//                     label={<MyGoogleFont text="Username" />}
//                     onBlur=""
//                     value={this.state.AddUsername}
//                     onChange={this.handleChangeUsername}
//                     style={{ fontSize: 15, fontFamilly: "sans-serif" }}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <FloatingLabelInput
//                     id="AddUserpasswordId"
//                     label={<MyGoogleFont text="Password" />}
//                     onBlur=""
//                     type="password"
//                     value={this.state.AddUserpassword}
//                     onChange={this.handleChangePassword}
//                     style={{ fontSize: 15 }}
//                   />
//                 </FormGroup>
//                 <Checkbox
//                   color="primary"
//                   id="checkboxID"
//                   onChange={this.checkboxChanged}
//                   checked={this.state.myCheckBox}
//                 />
//                 Make this user an Admin ?
//               </p>
//             </Modal.Body>

//             <Modal.Footer>
//               <Button variant="secondary" onClick={this.HideAddUserModal}>
//                 <MyGoogleFont text="Close" />
//               </Button>
//               <MDBBtn
//                 style={this.myStyle.buttonStyle}
//                 disabled={!this.validateForm()}
//                 type="submit"
//               >
//                 <MyGoogleFont text="Save User Details" />
//               </MDBBtn>
//             </Modal.Footer>
//           </form>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Staff;
