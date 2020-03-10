import React, { Component } from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";

export default class CareerPaths extends Component {
  render() {
    return (
      <div>
        <h4>Career Paths</h4>
        <ListGroup>
          {this.props.careerPaths.map(careerPath => (
            <CareerPath key={careerPath.id} careerPath={careerPath} />
          ))}
        </ListGroup>
      </div>
    );
  }
}
