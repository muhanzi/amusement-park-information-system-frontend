import React, { Component } from "react";
import MyGoogleFont from "../subComponents/myGoogleFont";
import MyCard from "../subComponents/mycard.jsx";
import { CardColumns } from "react-bootstrap";
import AddIcon from "../../../images/addicon.jpg";
import DeleteIcon from "../../../images/deleteicon.png";
import ModifyIcon from "../../../images/modifyicon.png";
import PrintIcon from "../../../images/printicon.png";
import PauseIcon from "../../../images/pauseicon.png";
import { ticket } from "../subComponents/ticketValues";

class Pirates extends Component {
  state = {
    pirateShipDetails: this.props.details
  };
  componentDidMount() {
    ticket.pirateShip.price = this.state.pirateShipDetails.programPrice;
    // alert("===== " + ticket.pirateShip.price);  // works fine
  }
  render() {
    return (
      <div>
        <div style={{ paddingLeft: 20 }}>
          <h7>
            <MyGoogleFont text={"Current User: " + this.props.userEmail} />
          </h7>
        </div>
        <div style={{ marginTop: 10 }}>
          <CardColumns>
            <MyCard
              data={{
                title: "Add to Ticket",
                buttonText: "+ Add",
                image: AddIcon,
                buttonAction: "addPirate",
                details: this.state.pirateShipDetails
              }}
            />
            <MyCard
              data={{
                title: "Print Ticket",
                buttonText: "Print",
                image: PrintIcon,
                paddingvalue: 2,
                buttonAction: "printTicket"
              }}
            />
            <MyCard
              data={{
                title: "Modify Price",
                buttonText: "New Price",
                image: ModifyIcon,
                paddingvalue: 2,
                buttonAction: "modifyPrice",
                details: this.state.pirateShipDetails
              }}
            />
          </CardColumns>
          <CardColumns>
            <MyCard
              data={{
                title: "Pause Pirate",
                buttonText: "Pause",
                image: PauseIcon,
                buttonAction: "pausePirate",
                details: this.state.pirateShipDetails
              }}
            />
            <MyCard
              data={{
                title: "Remove Pirate",
                buttonText: "Remove",
                image: DeleteIcon,
                paddingvalue: 2,
                buttonAction: "removePirate",
                details: this.state.pirateShipDetails
              }}
            />
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default Pirates;
