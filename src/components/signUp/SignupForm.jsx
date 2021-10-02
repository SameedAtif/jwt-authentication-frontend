import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import {Form, Button} from 'react-bootstrap'
import { Formik } from 'formik';

import { createUser } from '../../actions/userActions';
import TextField from '../elements/TextField';

const SignupForm = ({ handleSignUpUser }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSignUpUser(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <TextField
          label="First Name"
          name="firstName"
          type="text"
        />
        <TextField
          label="Last Name"
          name="lastName"
          type="text"
        />
        <TextField
          label="Email"
          name="email"
          type="text"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="confirmPassword"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSignUpUser: (payload) => {
    dispatch(createUser(payload))
  }
})

SignupForm.propTypes = {
  handleSignUpUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignupForm);
