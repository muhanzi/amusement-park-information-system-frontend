import React, { Component } from "react";
import MyGoogleFont from "../subComponents/myGoogleFont";
import MyCard from "../subComponents/mycard.jsx";
import { Row, Col, Container, CardDeck, CardColumns } from "react-bootstrap";

class Pirates extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ paddingLeft: 20 }}>
          <h7>
            <MyGoogleFont text={"Current User: " + this.props.userEmail} />
          </h7>
        </div>
        <div style={{ marginTop: 10 }}>
          {/*  without CardDeck of react-bootstrap  // CardDeck puts cards in a row  // !!!!!!!!!!!!
          <Container>   // problem of margin in the second row  !!!!!!!!!!!!!!!!!!!!
            <Row>
              <Col>
                <MyCard
                  data={{ title: "Add to Ticket", buttonText: "+ Add" }}
                />
              </Col>
              <Col>
                <MyCard data={{ title: "Print Ticket", buttonText: "Print" }} />
              </Col>
              <Col>
                <MyCard
                  data={{ title: "Modify Price", buttonText: "New Price" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 15 }}>
              <Col>
                <MyCard
                  data={{ title: "Delete Program", buttonText: "Delete" }}
                />
              </Col>
              <Col>
                <MyCard
                  data={{ title: "Pause Program", buttonText: "Pause" }}
                />
              </Col>
            </Row>
          </Container> */}
          {/*  with CardDeck of react BootStrap  // CardDeck puts cards in a row  // !!!!!!!!!!!!
          // problem of width of the screen after adding the second CardDeck !!!!!!!!!!
          <CardDeck>
            <MyCard data={{ title: "Add to Ticket", buttonText: "+ Add" }} />
            <MyCard data={{ title: "Print Ticket", buttonText: "Print" }} />
            <MyCard data={{ title: "Modify Price", buttonText: "New Price" }} />
          </CardDeck>
          <CardDeck style={{ marginTop: 15 }}>
            <MyCard data={{ title: "Delete Program", buttonText: "Delete" }} />
            <MyCard data={{ title: "Pause Program", buttonText: "Pause" }} />
          </CardDeck> */}
          <CardColumns>
            <MyCard data={{ title: "Add to Ticket", buttonText: "+ Add" }} />
            <MyCard data={{ title: "Print Ticket", buttonText: "Print" }} />
            <MyCard data={{ title: "Modify Price", buttonText: "New Price" }} />
            <MyCard data={{ title: "Delete Program", buttonText: "Delete" }} />
            <MyCard data={{ title: "Pause Program", buttonText: "Pause" }} />
            <MyCard data={{ title: "Add to Ticket", buttonText: "+ Add" }} />
          </CardColumns>
          <CardColumns>
            <MyCard data={{ title: "Add to Ticket", buttonText: "+ Add" }} />
            <MyCard data={{ title: "Print Ticket", buttonText: "Print" }} />
            <MyCard data={{ title: "Modify Price", buttonText: "New Price" }} />
            <MyCard data={{ title: "Delete Program", buttonText: "Delete" }} />
            <MyCard data={{ title: "Pause Program", buttonText: "Pause" }} />
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default Pirates;
