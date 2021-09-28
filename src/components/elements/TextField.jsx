import React from 'react';
import Form from 'react-bootstrap/Form'

import { useField } from 'formik';


const TextField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <Form.Group>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <Form.Control className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Form.Group>
  );
};

export default TextField;
