import React from "react";
import Course from "./Course";
import Table from "react-bootstrap/Table";

const Courses = props => (
  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return <Course key={course.id} course={course} />;
        })}
      </tbody>
    </Table>
  </div>
);

export default Courses;
