import React from "react";
import Table from "react-bootstrap/Table";

const Courses = props => {
  console.log(props.courses);
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
          {props.courses.map(course => {
            return (
              <tr>
                <td>
                  <a href={course.url}>{course.title}</a>
                </td>
                <td>
                  {course.length} minute
                  {course.length === 1 ? null : "s"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Courses;
