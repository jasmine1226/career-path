import React from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";
import LearningPathGuide from "./LearningPathGuide";

const CareerPaths = props => {
  return (
    <div>
      <Row>
        <Col>
          <ListGroup>
            {props.careerPaths.map(careerPath => {
              const title = careerPath.title;
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
        <Col md="8">
          <Switch>
            <Route exact path="/career_paths" component={LearningPathGuide} />
            {props.careerPaths.map(careerPath => {
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
