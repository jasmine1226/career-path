import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Route } from "react-router-dom";

//react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import CourseContainer from "./containers/CourseContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>AWS Learning Hub</Navbar.Brand>
        <Nav.Link exact href="/" exact="true">
          Home
        </Nav.Link>
        <Nav.Link exact href="/career_paths" exact="true">
          Career Paths
        </Nav.Link>
        <Nav.Link exact href="/courses" exact="true">
          Courses
        </Nav.Link>
      </Navbar>
      <Container>
        <Col id="active-user-display">Welcome back, User</Col>

        <CourseContainer />
      </Container>
    </div>
  );
};

export default App;
