import React from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";

const CareerPaths = props => (
  <div>
    <h4>Career Paths</h4>
    <ListGroup>
      {props.careerPaths.map(careerPath => (
        <CareerPath key={careerPath.id} careerPath={careerPath} />
      ))}
    </ListGroup>
  </div>
);

export default CareerPaths;
