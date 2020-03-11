import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CareerPath = props => {
  const careerPath = props.careerPath.attributes;
  return <ListGroup.Item variant="light">{careerPath.title}</ListGroup.Item>;
};

export default CareerPath;

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
