import React from "react";
import "./App.css";
import { render } from "react-dom";

//react-bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CareerPathContainer from "./containers/CareerPathContainer";
import CourseContainer from "./containers/CourseContainer";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Career Path</Navbar.Brand>
      </Navbar>
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
