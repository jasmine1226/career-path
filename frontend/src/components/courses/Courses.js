import React from "react";
import Course from "./Course";

import CardDeck from "react-bootstrap/CardDeck";

const Courses = props => (
  <CardDeck style={{ display: "flex", flexDirection: "row" }}>
    <div class="row justify-content-center">
      {props.courses.map(course => {
        return <Course key={course.id} course={course} />;
      })}
    </div>
  </CardDeck>
);

export default Courses;
