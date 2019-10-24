import React, { Component } from "react";

class DraftComponent extends Component {
  state = {};
  myFunction() {
    // dynamic Ccomponent Name with jsx
    /*
    React.createElement(
      MyButton,
      {color: 'blue', shadowSize: 2},
      'Click Me'
    )
    
   React.createElement(
    ComponentName,
    {props},
    Children
  )
  */
  }
  render() {
    return (
      <p>
        <h1>Draft Component !!!!!!!!!</h1>
        <h2>{this.props.data}</h2>
      </p>
    );
  }
}

export default DraftComponent;
