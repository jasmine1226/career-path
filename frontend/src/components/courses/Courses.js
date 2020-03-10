import React, { Component } from "react";
import Course from "./Course";
import Table from "react-bootstrap/Table";

export default class Courses extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map(course => {
              return <Course key={course.id} course={course} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
