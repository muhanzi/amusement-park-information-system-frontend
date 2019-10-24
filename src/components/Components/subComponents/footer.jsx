import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import Project from "./MyStatic.js";
import MyGoogleFont from "./myGoogleFont";

const MyFooter = () => {
  return (
    <MDBFooter>
      <div
        style={{
          textAlign: "center",
          height: 70,
          paddingTop: 20,
          color: "white",
          backgroundColor: Project().projectSupportColor
        }}
      >
        <MDBContainer fluid>
          <MyGoogleFont
            text={
              " " +
              new Date().getFullYear() +
              " Copyright: " +
              Project().companyName
            }
          />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default MyFooter;
