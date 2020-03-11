import React from "react";

const Course = props => {
  const course = props.course.attributes;
  return (
    <tr>
      <td>
        <a href={course.url}>{course.title}</a>
      </td>
      <td>{course.length}</td>
    </tr>
  );
};

export default Course;
