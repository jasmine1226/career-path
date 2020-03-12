import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Course = props => {
  const course = props.course;
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
        <Button href={course.url} target="_blank" variant="primary">
          View
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Course;
