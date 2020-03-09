import React, { Component } from "react";
import Courses from "../components/courses/Courses";
import { connect } from "react-redux";

class CourseContainer extends Component {
  render() {
    return (
      <div>
        <h4>Course Container</h4>
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ courses: state.courses });

export default connect(mapStateToProps)(CourseContainer);
