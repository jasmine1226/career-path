import React from "react";
import Table from "react-bootstrap/Table";

const Courses = props => {
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
                  <a href={course.url} target="_blank">
                    {course.title}
                  </a>
                </td>
                <td>
                  {course.length} min
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
