import React, { Component } from "react";
import MyGoogleFont from "../subComponents/myGoogleFont";

class AuditoriumMgt extends Component {
  state = {
    auditoriumDetails: this.props.details
  };
  render() {
    return (
      <div style={{ padding: 10, fontSize: 25, fontWeight: 15 }}>
        <MyGoogleFont text="Hello world !" />
      </div>
    );
  }
}

export default AuditoriumMgt;
