import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Courses = props => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Length</th>
            {!props.editing ? null : <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return (
              <tr>
                <td>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {course.title}
                  </a>
                </td>
                <td>
                  {course.length} min
                  {course.length === 1 ? null : "s"}
                </td>
                {!props.editing ? null : (
                  <td>
                    <Button variant="primary">Delete</Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Courses;
