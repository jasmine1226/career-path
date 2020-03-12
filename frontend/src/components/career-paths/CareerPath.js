import React from "react";
import CourseTable from "../courses/CourseTable";

const CareerPath = props => {
  return (
    <>
      <h4>Career Path for {props.careerPath.title}s</h4>
      <CourseTable courses={props.careerPath.courses} />
    </>
  );
};

export default CareerPath;
