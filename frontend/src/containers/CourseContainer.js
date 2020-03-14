import React, { Component } from "react";
import Courses from "../components/courses/Courses";
import CourseForm from "../components/courses/CourseForm";
import { connect } from "react-redux";
import { createCourse } from "../actions/courseActions";

class CourseContainer extends Component {
  render() {
    return (
      <div>
        <CourseForm createCourse={this.props.createCourse} />
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCourse: course => dispatch(createCourse(course))
});

export default connect(null, mapDispatchToProps)(CourseContainer);
