import React from "react";
import CareerPath from "./CareerPath";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";
import LearningPathGuide from "./LearningPathGuide";
import CareerPathForm from "./CareerPathForm";

const CareerPaths = props => {
  return (
    <div>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Link to={"/career_paths/new"}>
                <Button>Add a Career Path</Button>
              </Link>
            </ListGroup.Item>
            {props.careerPaths.map(careerPath => {
              const title = careerPath.title;
              const id = careerPath.id;
              return (
                <ListGroup.Item key={id}>
                  <Link to={`/career_paths/${id}`}>{title}</Link>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
        <Col md="9">
          <Switch>
            <Route exact path="/career_paths" component={LearningPathGuide} />
            <Route
              exact
              path="/career_paths/new"
              component={() => (
                <CareerPathForm createCareerPath={props.createCareerPath} />
              )}
            />
            {props.careerPaths.map(careerPath => {
              return (
                <Route
                  path={`/career_paths/${careerPath.id}`}
                  component={() => (
                    <CareerPath
                      careerPath={careerPath}
                      courses={props.courses}
                      fetchCareerPaths={props.fetchCareerPaths}
                      editCareerPath={props.editCareerPath}
                    />
                  )}
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
