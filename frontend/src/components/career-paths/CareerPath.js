import React, { Component } from "react";
import { render } from "react-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default class CareerPath extends Component {
  render() {
    return (
      <ListGroup.Item variant="light" key={this.props.careerPath.id}>
        {this.props.careerPath.title}
      </ListGroup.Item>
    );
  }
}
