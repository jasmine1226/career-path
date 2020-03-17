import React from "react";
import Course from "./Course";
import CourseForm from "./CourseForm";
import CardDeck from "react-bootstrap/CardDeck";

const Courses = props => (
  <>
    <CourseForm createCourse={props.createCourse} />
    {props.courses === [] ? null : (
      <CardDeck style={{ display: "flex", flexDirection: "row" }}>
        <div class="row justify-content-center">
          {props.courses.map(course => {
            return (
              <Course
                key={course.id}
                course={course}
                fetchCourses={props.fetchCourses}
              />
            );
          })}
        </div>
      </CardDeck>
    )}
  </>
);

export default Courses;
