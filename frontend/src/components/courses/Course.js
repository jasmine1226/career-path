import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class Course extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.course.title}</td>
        <td>{this.props.course.length}</td>
      </tr>
    );
  }
}
