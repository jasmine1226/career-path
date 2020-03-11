import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
      <tr>
        <td>
          <a href={this.props.course.url}>{this.props.course.title}</a>
        </td>
        <td>{this.props.course.length}</td>
      </tr>
    );
  }
}