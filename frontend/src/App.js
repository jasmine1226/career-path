import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourses } from "./actions/courseActions";

//react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import CareerPathContainer from "./containers/CareerPathContainer";
import CourseContainer from "./containers/CourseContainer";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
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
          <Route exact path="/" component={Home} courses={this.props.courses} />
          <Route
            path="/career_paths"
            component={CareerPathContainer}
            courses={this.props.courses}
          />
          <Route
            exact
            path="/courses"
            component={() => <CourseContainer courses={this.props.courses} />}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
