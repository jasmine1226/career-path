import React, { Component } from "react";
import CourseTable from "../courses/CourseTable";
import Button from "react-bootstrap/Button";
import { Route, Link, withRouter } from "react-router-dom";
import EditCareerPath from "./EditCareerPath";

class CareerPath extends Component {
  handleDelete = event => {
    fetch(`http://localhost:3000/api/v1/career_paths/${event.target.id}`, {
      method: "DELETE"
    }).then(res => {
      alert("The career path has been deleted.");
      this.props.fetchCareerPaths();
    });
  };

  render() {
    const {
      careerPath,
      courses,
      location,
      history,
      fetchCareerPaths
    } = this.props;
    return (
      <>
        <h4>Career Path for {careerPath.title}s</h4>
        {location.pathname === `/career_paths/${careerPath.id}/edit` ? null : (
          <Link to={`/career_paths/${careerPath.id}/edit`}>
            <Button variant="primary" style={{ marginBottom: 1 + "em" }}>
              Edit
            </Button>
          </Link>
        )}
        <Route
          path={`/career_paths/${careerPath.id}`}
          exact={true}
          component={() => (
            <CourseTable
              courses={careerPath.courses}
              careerPathId={careerPath.id}
              editing={false}
            />
          )}
        />
        <Route
          path={`/career_paths/${careerPath.id}/edit`}
          exact={true}
          component={() => (
            <>
              <EditCareerPath
                careerPath={careerPath}
                courses={courses}
                editCareerPath={this.props.editCareerPath}
              />
              <CourseTable
                courses={careerPath.courses}
                careerPathId={careerPath.id}
                fetchCareerPaths={fetchCareerPaths}
                editing={true}
              />
              <Button
                variant="primary"
                style={{ marginRight: 1 + "em" }}
                id={careerPath.id}
                onClick={event => this.handleDelete(event)}
              >
                Delete Career Path
              </Button>
              <Button variant="primary" onClick={() => history.goBack()}>
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
