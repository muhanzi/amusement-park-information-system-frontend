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
import Box from "@material-ui/core/Box";
import GoogleFontLoader from "./myGoogleFont.js";
import { ticket } from "./ticketValues";

class MyCard extends Component {
  state = {};
  checkButtonAction = () => {
    switch (this.props.data.buttonAction) {
      case "addPirate":
        this.addPirateShipToTicket();
        break;
      case "printTicket":
        this.printTicket();
        break;
      case "modifyPrice":
        this.modifyPriceOfPirateShip();
        break;
      case "pausePirate":
        this.pausePirateShip();
        break;
      case "removePirate":
        this.removePirateShip();
        break;
      default:
      // nothing
    }
  };
  addPirateShipToTicket() {
    ticket.pirateShip.isOnTicket = true;
    //alert("Pirate ship added to ticket");
    alert(
      ticket.pirateShip.isOnTicket +
        " " +
        ticket.pirateShip.price +
        "\n" +
        ticket.auditorium.isOnTicket +
        " " +
        ticket.auditorium.price +
        "\n" +
        ticket.basketballPitch.isOnTicket +
        " " +
        ticket.basketballPitch.price +
        "\n" +
        ticket.footballPitch.isOnTicket +
        " " +
        ticket.footballPitch.price +
        "\n" +
        ticket.swimmingPool.isOnTicket +
        " " +
        ticket.swimmingPool.price +
        "\n" +
        ticket.volleballPitch.isOnTicket +
        " " +
        ticket.volleballPitch.price +
        "\n"
    ); // works fine
    // show popup // for ticketComponent
  }
  printTicket() {
    alert("Ticket printed");
  }
  modifyPriceOfPirateShip() {}
  pausePirateShip() {}
  removePirateShip() {}
  render() {
    return (
      <MDBCol>
        <MDBCard
          style={{
            width: "15rem",
            border: 0,
            paddingTop: this.props.data.paddingvalue
              ? this.props.data.paddingvalue
              : 0
          }}
        >
          <Box boxShadow={5} style={{ borderRadius: 20 }}>
            <MDBCardImage
              className="img-fluid"
              src={this.props.data.image}
              waves
              alt="Load your image"
              style={{
                borderTopLeftRadius: 20
              }}
            />
            <MDBCardBody>
              <MDBCardTitle>
                <GoogleFontLoader text={this.props.data.title} />
              </MDBCardTitle>
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
                onClick={this.checkButtonAction}
              >
                <GoogleFontLoader text={this.props.data.buttonText} />
              </MDBBtn>
            </MDBCardBody>
          </Box>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default MyCard;
