import React, { Component } from "react";
import GoogleFontLoader from "react-google-font-loader"; //MyGoogleFont

class MyGoogleFont extends Component {
  state = {
    roboto: "Roboto Mono, monospaced",
    labelle: "'La Belle Aurore', cursive"
  };
  render() {
    return (
      <div>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"]
            },
            {
              font: "Roboto Mono",
              weights: [400, 700]
            },
            {
              font: "'La Belle Aurore', cursive",
              weights: [400, 700]
            }
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />

        {/* <p style={{ fontFamily: "Roboto Mono, monospaced" }}>
        This will be in Roboto Mono!
      </p>
      <p style={{ fontFamily: "Roboto, sans-serif" }}>
        This will be in Roboto!
      </p> */}
        <div style={{ fontFamily: this.state.labelle }}>{this.props.text}</div>
      </div>
    );
  }
}

export default MyGoogleFont;
