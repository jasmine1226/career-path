import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

class CourseForm extends Component {
  state = {
    title: "",
    url: "",
    length: 0,
    open: false
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
      length: 0
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{ marginBottom: 1 + "em" }}
        >
          {open ? "Collapse" : "Add a New Course"}
        </Button>
        <Collapse in={open}>
          <Form onSubmit={event => this.handleOnSubmit(event)}>
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
            <Button type="submit">Submit</Button>
          </Form>
        </Collapse>
      </>
    );
  }
}

export default CourseForm;
