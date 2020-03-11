import React from "react";
import CourseTable from "../courses/CourseTable";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const CareerPath = props => {
  return (
    <>
      <h4>Career Path for {props.careerPath.attributes.title}s</h4>
      <CourseTable
        courses={[
          {
            title: "AWS re:Invent 2019 - Keynote with Andy Jassy",
            url: "https://www.youtube.com/watch?v=7-31KgImGgU&t=120s",
            length: 160
          },
          {
            title:
              "AWS Certified Cloud Practitioner Training 2020 - Full Course",
            url: "https://www.youtube.com/watch?v=3hLmDS179YE",
            length: 240
          },
          {
            title: "How to Know Your Customers by Amazon Sr Product Manager",
            url: "https://www.youtube.com/watch?v=JCmOKM8wZnE",
            length: 67
          }
        ]}
      />
    </>
  );
};

export default CareerPath;
