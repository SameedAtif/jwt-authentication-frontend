import React from 'react';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextField from '../elements/TextField';

const SignupForm = () => {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
