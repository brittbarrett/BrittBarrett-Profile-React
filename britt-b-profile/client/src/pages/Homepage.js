import React from "react";
import AboutMe from "../components/About/AboutMe";
import { Row, Col } from "reactstrap";

function Homepage() {
  return (
    <div className="container" id="about-info">
      <Row>
        <Col md="8">
          <AboutMe />
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
