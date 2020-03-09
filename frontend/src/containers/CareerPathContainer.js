import React, { Component } from "react";
import CareerPaths from "../components/career-paths/CareerPaths";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CareerPathContainer extends Component {
  render() {
    return (
      <Container id="CareerPathContainer">
        <Row>
          <Col>
            <CareerPaths
              careerPaths={[
                { id: 0, title: "Sample-SDE" },
                { id: 1, title: "Sample-TPM" }
              ]}
            />
          </Col>
          <Col md={9}>
            <h4>Courses</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}
