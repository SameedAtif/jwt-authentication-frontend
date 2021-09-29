import React, { useState } from 'react'
import {Row, Col, Tabs, Tab} from 'react-bootstrap'
import SignupForm from './SignupForm';
import SigninForm from './SigninForm'

const Signin = () => {
  const [key, setKey] = useState('signIn');

  return (
    <Row>
      <Col md={8} id="site-heading">
        <h1>Welcome to</h1>
      </Col>
      <Col md={4} >
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="signIn" title="Sign in">
            <SigninForm />
          </Tab>
          <Tab eventKey="signUp" title="Sign up">
            <SignupForm />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}
export default Signin;