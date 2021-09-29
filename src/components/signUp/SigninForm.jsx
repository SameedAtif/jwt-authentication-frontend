import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextField from '../elements/TextField';

const SigninForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string(),
        password: Yup.string()
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
