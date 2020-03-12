import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class CareerPathForm extends Component {
  state = {
    title: ""
  };

  handleOnChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  render() {
    return (
      <Form>
        <h4>Create a new Career Path</h4>
        <Form.Group as={Row}>
          <Col md={2}>
            <Form.Label>Job Title</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              id="title"
              value={this.state.title}
              onChange={event => this.handleOnChange(event)}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CareerPathForm;
