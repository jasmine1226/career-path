import React, { Component } from "react";
import Courses from "../components/courses/Courses";
import CourseForm from "../components/courses/CourseForm";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/courseActions";

class CourseContainer extends Component {
  render() {
    return (
      <div>
        <h4>Course Container</h4>
        <CourseForm />
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  fetchCourses: dispatch(fetchCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
