import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";

export default class CareerPathContainer extends Component {
  render() {
    return (
      <div id="CareerPathContainer">
        Career Path Container
        <CareerPaths
          careerPaths={[
            { id: 0, title: "Sample-SDE" },
            { id: 1, title: "Sample-TPM" }
          ]}
        />
      </div>
    );
  }
}
