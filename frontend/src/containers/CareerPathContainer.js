import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import { connect } from "react-redux";
import {
  fetchCareerPaths,
  createCareerPath
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
          createCareerPath={this.props.createCareerPath}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careerPaths: state.careerPaths
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCareerPaths: () => dispatch(fetchCareerPaths()),
    createCareerPath: careerPath => dispatch(createCareerPath(careerPath))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerPathContainer);
