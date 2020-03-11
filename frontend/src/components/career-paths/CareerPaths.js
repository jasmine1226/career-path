import React from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";
import CourseTable from "../courses/CourseTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";

const CareerPaths = props => {
  const careerPaths = props.careerPaths;

  return (
    <div>
      <Row>
        <Col>
          <ListGroup>
            {careerPaths.map(careerPath => {
              const title = careerPath.attributes.title;
              const id = careerPath.id;
              return (
                <Col>
                  <ListGroup.Item key={id} variant="light">
                    <Link to={`/career_paths/${id}`}>{title}</Link>
                  </ListGroup.Item>
                </Col>
              );
            })}
          </ListGroup>
        </Col>
        <Col md="9">
          <Switch>
            {careerPaths.map(careerPath => {
              return (
                <Route
                  path={`/career_paths/${careerPath.id}`}
                  exact={true}
                  component={() => <CareerPath careerPath={careerPath} />}
                />
              );
            })}
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default CareerPaths;
