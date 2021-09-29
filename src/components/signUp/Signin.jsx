import React, { useState } from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import SignupForm from './SignupForm';
import SigninForm from './SigninForm'

const Signin = () => {
  const [key, setKey] = useState('signIn');

  return (
    <div id="login-page">
      <div className="row">
        <div className="col-md-8" id="site-heading">
          <h1>Welcome to</h1>
        </div>
        <div className="col-md-4">
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
          {/* <div className="card" id="form-card">
            <div className="card-body" id="form-card-body">
              <h2 className="card-title">Hi There!</h2>
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#signin">Login</a></li>
                <li><a data-toggle="tab" href="#signup">Sign up</a></li>
              </ul>
            <br />
            </div>
            <div className="tab-content">
              <div id="signin" className="tab-pane fade in active">
                <SignupForm />
              </div>
              <div id="signup" className="tab-pane fade">
                <SignupForm />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Signin;