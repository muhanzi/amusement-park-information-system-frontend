import React, { Component } from "react";
import MyGoogleFont from "../subComponents/myGoogleFont";

class Swimming extends Component {
  state = {
    swimmingPoolDetails: this.props.details
  };
  render() {
    return (
      <div style={{ padding: 10, fontSize: 25, fontWeight: 15 }}>
        <MyGoogleFont text="Hello world ! => Swimming" />
      </div>
    );
  }
}

export default Swimming;
