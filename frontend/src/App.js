import React from "react";
import "./App.css";
import { render } from "react-dom";
import { Route, NavLink } from "react-router-dom";

//react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CareerPathContainer from "./containers/CareerPathContainer";
import CourseContainer from "./containers/CourseContainer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Career Path</Navbar.Brand>
        <Nav.Link exact href="/" exact>
          Home
        </Nav.Link>
        <Nav.Link exact href="/career_paths" exact>
          Career Paths
        </Nav.Link>
        <Nav.Link exact href="/courses" exact>
          Courses
        </Nav.Link>
      </Navbar>
      <Container>
        <Col id="active-user-display">Welcome back, User</Col>
        <Route exact path="/" component={Home} />
        <Route exact path="/career_paths" component={CareerPathContainer} />
        <Route exact path="/courses" component={CourseContainer} />
      </Container>
    </div>
  );
}

export default App;
