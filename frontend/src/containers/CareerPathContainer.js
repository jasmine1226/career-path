import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import { connect } from "react-redux";
import {
  fetchCareerPaths,
  createCareerPath,
  editCareerPath
} from "../actions/careerPathActions";

class CareerPathContainer extends Component {
  componentDidMount() {
    this.props.fetchCareerPaths();
  }

  render() {
    const {
      careerPaths,
      courses,
      createCareerPath,
      editCareerPath,
      fetchCareerPaths
    } = this.props;

    return (
      <div>
        {careerPaths === [] ? null : (
          <CareerPaths
            careerPaths={careerPaths}
            courses={courses}
            createCareerPath={createCareerPath}
            editCareerPath={editCareerPath}
            fetchCareerPaths={fetchCareerPaths}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careerPaths: state.careerPaths,
  courses: state.courses
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCareerPaths: () => dispatch(fetchCareerPaths()),
    createCareerPath: careerPath => dispatch(createCareerPath(careerPath)),
    editCareerPath: (careerPath, courseId) =>
      dispatch(editCareerPath(careerPath, courseId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerPathContainer);
