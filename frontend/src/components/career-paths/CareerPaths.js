import React, { Component } from "react";
import CareerPath from "./CareerPath";

export default class CareerPaths extends Component {
  render() {
    return (
      <div>
        <h4>Career Paths</h4>
        <ul>
          {this.props.careerPaths.map(careerPath => (
            <CareerPath careerPath={careerPath} />
          ))}
        </ul>
      </div>
    );
  }
}
