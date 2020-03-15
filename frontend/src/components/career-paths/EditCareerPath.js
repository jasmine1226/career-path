import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class EditCareerPath extends Component {
  state = {
    careerPath: this.props.careerPath,
    courseId: null
  };

  handleOnChange = event => {
    this.setState({
      courseId: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.courseId);
    console.log(this.props.careerPath.courses);
    this.props.editCareerPath(this.props.careerPath, this.state.courseId);
    this.setState({
      courseId: null
    });
  };

  render() {
    // only display courses that are not in the career path already
    const courseList = this.props.courses.filter(course => {
      if (!this.props.careerPath.courses.find(c => c.title === course.title)) {
        return course;
      }
    });
    return (
      <>
        <Form onSubmit={event => this.handleOnSubmit(event)}>
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label>Add a course</Form.Label>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={event => this.handleOnChange(event)}
              >
                {courseList.map(course => (
                  <option value={course.id}>{course.title}</option>
                ))}
              </Form.Control>
            </Col>
            <Button
              variant="primary"
              type="submit"
              style={{ marginBottom: 1 + "em" }}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
        {this.state.courseId}
      </>
    );
  }
}

export default EditCareerPath;
