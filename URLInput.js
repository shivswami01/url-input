import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./URLInput.css"; // Add this line for custom styles

const URLInput = () => {
  const initialValues = {
    protocol: "https://",
    url: "",
    suffix: ".com",
  };

  const validationSchema = Yup.object({
    protocol: Yup.string()
      .oneOf(["https://", "http://"], "Protocol must be 'https://' or 'http://'"),
    url: Yup.string()
      .required("URL is required"),
    suffix: Yup.string().required("Suffix is required"),
  });

  const handleSubmit = (values) => {
    const fullUrl = `${values.protocol}${values.url}${values.suffix}`;
    alert(`Full URL: ${fullUrl}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="url-form">
          <div className="url-input-group">
            <Field as="select" name="protocol" className="url-input-protocol">
              <option value="https://">https://</option>
              <option value="http://">http://</option>
            </Field>

            <Field name="url" type="text" placeholder="www.example" className="url-input-url" />
            <Field as="select" name="suffix" className="url-input-suffix">
              <option value=".com">.com</option>
              <option value=".org">.org</option>
              <option value=".net">.net</option>
              <option value=".io">.io</option>
              <option value=".edu">.edu</option>
            </Field>
          </div>

          <div className="error-message">
            <ErrorMessage name="protocol" component="div" style={{ color: 'red' }} />
            <ErrorMessage name="url" component="div" style={{ color: 'red' }} />
            <ErrorMessage name="suffix" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default URLInput;
