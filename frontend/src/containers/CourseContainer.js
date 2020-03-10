import React, { Component } from "react";
import Courses from "../components/courses/Courses";
import CourseForm from "../components/courses/CourseForm";
import { connect } from "react-redux";
import { fetchCourses, createCourse } from "../actions/courseActions";

class CourseContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return (
      <div>
        <h4>Course Container</h4>
        <CourseForm createCourse={this.props.createCourse} />
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  createCourse: course => dispatch(createCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
