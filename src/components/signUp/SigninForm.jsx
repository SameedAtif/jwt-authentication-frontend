import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import { signInUser } from '../../actions/authActions';

import TextField from '../elements/TextField';

const SigninForm = (
  { handleSignInUser }
) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string(),
        password: Yup.string()
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSignInUser(values);
        setSubmitting(false);
      }}
    >
      <Form>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSignInUser: (payload) => {
    dispatch(signInUser(payload));
  }
})

SigninForm.propTypes = {
  handleSignInUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SigninForm);
