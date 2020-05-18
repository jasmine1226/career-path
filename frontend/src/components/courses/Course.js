import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Course = props => {
  const course = props.course;

  const handleDelete = event => {
    fetch(`http://localhost:3000/api/v1/courses/${event.target.id}`, {
      method: "DELETE"
    }).then(res => {
      alert("The course has been deleted.");
      props.fetchCourses();
    });
  };

  return (
    <Card style={{ flex: 1 }}>
      <Card.Img variant="top" src="https://placeimg.com/286/180/tech" />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          {course.length} minute
          {course.length === 1 ? null : "s"}
        </Card.Text>
        <Button
          href={course.url}
          style={{ marginRight: 1 + "em" }}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          View
        </Button>
        <Button
          onClick={event => handleDelete(event)}
          id={course.id}
          variant="primary"
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Course;
