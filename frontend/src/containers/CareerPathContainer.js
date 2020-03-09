import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import { connect } from "react-redux";

class CareerPathContainer extends Component {
  render() {
    return (
      <div>
        <CareerPaths careerPaths={this.props.careerPaths} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careerPaths: state.careerPaths
});

export default connect(mapStateToProps)(CareerPathContainer);
