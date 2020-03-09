import React, { Component } from "react";
import Course from "./Course";

export default class Courses extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.courses.map(course => {
            return <Course course={course} />;
          })}
        </ul>
      </div>
    );
  }
}
