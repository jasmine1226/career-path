import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class EditCareerPath extends Component {
  state = {
    courseId: null
  };

  handleOnChange = event => {
    console.log(event.target.value);
    // const { id, value } = event.target;
    // this.setState({
    //   [id]: value
    // });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    //this.props.createCareerPath({ title: this.state.title });
    this.setState({
      courseId: null
    });
  };

  render() {
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
                <option value="1">Course 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
      </>
    );
  }
}

export default EditCareerPath;
