import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CourseForm extends Component {
  state = {
    title: "",
    url: "",
    length: ""
  };

  handleOnChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const course = {
      title: this.state.title,
      url: this.state.url,
      length: this.state.length
    };
    this.props.createCourse(course);
    this.setState({
      title: "",
      url: "",
      length: ""
    });
  };

  render() {
    return (
      <Form onSubmit={event => this.handleOnSubmit(event)}>
        <Form.Text>Add a new course</Form.Text>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              id="title"
              value={this.state.title}
              onChange={event => this.handleOnChange(event)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            URL
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              id="url"
              value={this.state.url}
              onChange={event => this.handleOnChange(event)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Length
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              id="length"
              value={this.state.length}
              onChange={event => this.handleOnChange(event)}
            />
          </Col>
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CourseForm;
