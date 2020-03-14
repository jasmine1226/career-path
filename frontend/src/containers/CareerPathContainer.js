import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import { connect } from "react-redux";
import {
  fetchCareerPaths,
  createCareerPath,
  deleteCareerPath
} from "../actions/careerPathActions";

class CareerPathContainer extends Component {
  componentDidMount() {
    this.props.fetchCareerPaths();
  }

  render() {
    return (
      <div>
        <CareerPaths
          careerPaths={this.props.careerPaths}
          courses={this.props.courses}
          createCareerPath={this.props.createCareerPath}
          deleteCareerPath={this.props.deleteCareerPath}
        />
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
    deleteCareerPath: id => dispatch(deleteCareerPath(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerPathContainer);
