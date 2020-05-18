import React, { Component } from "react";
import Courses from "../components/courses/Courses";
import { connect } from "react-redux";
import { fetchCourses, createCourse } from "../actions/courseActions";
import { Route } from "react-router-dom";
import CareerPathContainer from "./CareerPathContainer";
import Home from "../components/Home";

class CourseContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          component={() => (
            // pick 3 random courses to highlight
            <Home
              courses={this.props.courses
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)}
            />
          )}
        />
        <Route path="/career_paths" component={CareerPathContainer} />

        <Route
          exact
          path="/courses"
          component={() => (
            <Courses
              courses={this.props.courses}
              createCourse={this.props.createCourse}
              fetchCourses={this.props.fetchCourses}
            />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  createCourse: course => dispatch(createCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
