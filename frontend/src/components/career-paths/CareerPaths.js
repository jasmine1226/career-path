import React from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";
import CourseTable from "../courses/CourseTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch } from "react-router-dom";

const CareerPaths = props => {
  const careerPaths = props.careerPaths;

  return (
    <div>
      <h4>Career Paths</h4>
      <Row>
        <Col>
          <ListGroup>
            {careerPaths.map(careerPath => (
              <CareerPath key={careerPath.id} careerPath={careerPath} />
            ))}
          </ListGroup>
        </Col>
        <Col md="9">
          <Switch>
            {careerPaths.map(careerPath => {
              console.log(careerPath);
              return (
                <Route
                  path={`/career_paths/${careerPath.id}`}
                  exact={true}
                  children={() => <h4>{careerPath.title}</h4>}
                />
              );

              // return (
              //   <Route
              //     to={`/career_paths/${careerPath.id}`}
              //     component={CourseTable}
              //     courses={courses}
              //   />
              // );
            })}
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default CareerPaths;
