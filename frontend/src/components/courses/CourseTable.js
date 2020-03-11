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
          return (
            <tr>
              <td>
                <a href={course.attributes.url}>{course.attributes.title}</a>
              </td>
              <td>
                {course.attributes.length} minute
                {course.attributes.length === 1 ? null : "s"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
);

export default Courses;
