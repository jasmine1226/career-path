import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import { connect } from "react-redux";
import { fetchCareerPaths } from "../actions/careerPathActions";

class CareerPathContainer extends Component {
  componentDidMount() {
    this.props.fetchCareerPaths();
  }

  render() {
    //console.log(this.props.careerPaths);
    return (
      <div>
        <CareerPaths careerPaths={this.props.careerPaths} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careerPaths: state.careerPaths,
  loading: state.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCareerPaths: () => dispatch(fetchCareerPaths())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerPathContainer);
