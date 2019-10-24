import React, { Component } from "react";
import MyGoogleFont from "../subComponents/myGoogleFont";
import { Nav } from "react-bootstrap";
import { routeToComponent } from "../subComponents/MyRouting";

class Reports extends Component {
  state = {};
  example = () => {
    const obj = {
      ComponentName: "DraftComponent",
      propsValue: "pass a value here"
    };
    routeToComponent(obj);
  };
  render() {
    return (
      <div>
        <h2>
          <Nav.Link href="draft">
            <MyGoogleFont text="Draft Here" />
          </Nav.Link>
          {/* <MyGoogleFont text="Reports Here" /> */}
        </h2>
        <button className="btn btn-primary" onClick={this.example}>
          Go Draft
        </button>
      </div>
    );
  }
}

export default Reports;
