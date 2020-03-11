import React, { Component } from "react";

export default class Course extends Component {
  render() {
    const course = this.props.course.attributes;
    return (
      <tr>
        <td>
          <a href={course.url}>{course.title}</a>
        </td>
        <td>{course.length}</td>
      </tr>
    );
  }
}
