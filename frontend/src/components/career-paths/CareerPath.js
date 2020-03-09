import React, { Component } from "react";
import { render } from "react-dom";

export default class CareerPath extends Component {
  render() {
    return <li>{this.props.careerPath.title}</li>;
  }
}
