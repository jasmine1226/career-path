import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";

export default class CareerPathContainer extends Component {
  render() {
    return (
      <div>
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
