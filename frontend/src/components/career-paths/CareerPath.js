import React, { Component } from "react";
import { render } from "react-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default class CareerPath extends Component {
  render() {
    const careerPath = this.props.careerPath.attributes;
    return <ListGroup.Item variant="light">{careerPath.title}</ListGroup.Item>;
  }
}

{
  /* <Container>
        <Row>
          <Col id="active-user-display">Welcome back, User</Col>
        </Row>
        <Row>
          <Col>
            <CareerPathContainer />
          </Col>
          <Col md={9}>
            <CourseContainer />
          </Col>
        </Row>
      </Container> */
}
