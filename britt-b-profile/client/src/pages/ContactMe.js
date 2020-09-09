import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const ContactMe = () => {
  return (
    <div id="contactMe">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <legend>Contact</legend>
            </FormGroup>

            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="Your preferred name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userMessage">Please write your message here: </Label>
              <Input type="textarea" name="text" id="userMessage" />
            </FormGroup>
            <Button>Send Message</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactMe;
