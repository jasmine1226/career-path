import React, { Component } from "react";
import CareerPath from "./CareerPath";

export default class CareerPaths extends Component {
  render() {
    return (
      <div>
        <h3>Career Paths</h3>
        <ul>
          <CareerPath careerPath={{ id: 0, title: "Sample-SDE" }} />
        </ul>
      </div>
    );
  }
}
