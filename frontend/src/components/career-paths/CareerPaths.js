import React, { Component } from "react";
import CareerPath from "./CareerPath";

export default class CareerPaths extends Component {
  render() {
    return (
      <div>
        <h3>Career Paths</h3>
        <ul>
          {this.props.careerPaths.map(careerPath => (
            <CareerPath careerPath={careerPath} />
          ))}
        </ul>
      </div>
    );
  }
}
