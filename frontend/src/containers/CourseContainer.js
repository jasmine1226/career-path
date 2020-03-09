import React, { Component } from "react";
import Courses from "../components/courses/Courses";

export default class CourseContainer extends Component {
  render() {
    return (
      <div>
        <h4>Course Container</h4>
        <Courses
          courses={[
            {
              title: "SAMPLE-AWS re:Invent 2019 - Keynote with Andy Jassy",
              url: "https://www.youtube.com/watch?v=7-31KgImGgU&t=120s",
              length: 160
            },
            {
              title:
                "AWS Certified Cloud Practitioner Training 2020 - Full Course",
              url: "https://www.youtube.com/watch?v=3hLmDS179YE",
              length: 240
            }
          ]}
        />
      </div>
    );
  }
}
