import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import Project from "./MyStatic";

class MyCard extends Component {
  state = {};
  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "15rem" }}>
          <MDBCardImage
            className="img-fluid"
            src={this.props.data.image}
            waves
            alt="Load your image"
          />
          <MDBCardBody>
            <MDBCardTitle>{this.props.data.title}</MDBCardTitle>
            <MDBCardText>
              {/* Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content. */}
            </MDBCardText>
            <MDBBtn
              href="#"
              style={{
                backgroundColor: Project().projectColor,
                color: "white"
              }}
            >
              {this.props.data.buttonText}
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default MyCard;
