import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const CareerPath = props => {
  return <h4>Career Path for {props.careerPath.attributes.title}s</h4>;
};

export default CareerPath;
