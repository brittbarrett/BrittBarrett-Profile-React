import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const AboutMe = () => {
  return (
    <div id="about">
      <Card id="aboutDest">
        <CardBody>
          <CardTitle>About Info</CardTitle>
          <CardText>*** about content here ***</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="/Users/brittaniebarrett/Desktop/BrittBarrett-ReactProfile/BrittBarrett-Profile-React/britt-b-profile/client/public/images/britt-main.jpg"
          alt="About Brittanie Image"
        />
      </Card>
    </div>
  );
};

export default AboutMe;
