import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

function ExpandForm() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add New Course
      </Button>
      <Collapse in={open}>
        <Form onSubmit={event => this.props.handleOnSubmit(event)}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                id="title"
                value={this.state.title}
                onChange={event => this.props.handleOnChange(event)}
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
                onChange={event => this.props.handleOnChange(event)}
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
                onChange={event => this.props.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
          <Button variant="outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Collapse>
    </>
  );
}

export default ExpandForm;
