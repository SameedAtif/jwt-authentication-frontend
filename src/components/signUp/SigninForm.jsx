import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextField from '../elements/TextField';

const SigninForm = () => {
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

export default SigninForm;
