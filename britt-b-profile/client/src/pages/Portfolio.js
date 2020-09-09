import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Project from "../components/Project/Project";

const Portfolio = (props) => {
  return (
    <div className="container" id="portfolio">
      <Project />
    </div>
  );
};

export default Portfolio;
