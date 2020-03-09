import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import { connect } from "react-redux";

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
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Career Path</Navbar.Brand>
      </Navbar>
      <Container class="pb-md-3">
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
