import React, { Component } from "react";
import CourseTable from "../courses/CourseTable";
import Button from "react-bootstrap/Button";
import { Route, Link, withRouter } from "react-router-dom";
import EditCareerPath from "./EditCareerPath";

class CareerPath extends Component {
  render() {
    return (
      <>
        <h4>Career Path for {this.props.careerPath.title}s</h4>
        {this.props.location.pathname ===
        `/career_paths/${this.props.careerPath.id}/edit` ? null : (
          <Link to={`/career_paths/${this.props.careerPath.id}/edit`}>
            <Button variant="primary" style={{ marginBottom: 1 + "em" }}>
              Edit
            </Button>
          </Link>
        )}
        <Route
          path={`/career_paths/${this.props.careerPath.id}`}
          exact={true}
          component={() => (
            <CourseTable
              courses={this.props.careerPath.courses}
              editing={false}
            />
          )}
        />
        <Route
          path={`/career_paths/${this.props.careerPath.id}/edit`}
          exact={true}
          component={() => (
            <>
              <CourseTable
                courses={this.props.careerPath.courses}
                editing={true}
              />
              <Button
                variant="primary"
                style={{ marginBottom: 1 + "em" }}
                onClick={() => this.props.history.goBack()}
              >
                Done
              </Button>
            </>
          )}
        />
      </>
    );
  }
}

export default withRouter(CareerPath);
