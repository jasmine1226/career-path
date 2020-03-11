import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";

const CareerPath = props => {
  const careerPath = props.careerPath.attributes;
  const id = props.careerPath.id;
  return (
    <Col>
      <ListGroup.Item key={id} variant="light">
        <Link to={`/career_paths/${id}`}>{careerPath.title}</Link>
      </ListGroup.Item>
    </Col>
  );
};

export default CareerPath;
