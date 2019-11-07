import React, { Component } from "react";
import {connect} from 'react-redux';
import { Formik } from "formik";
import FormikStyle from "./common/form";
import * as actions from '../store/actions/'
import * as yup from "yup";

class Auth extends Component {
  render() {
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .label("Email")
        .email()
        .required(),
      password: yup
        .string()
        .label("Password")
        .required()
        .min(2, "Seems a bit short...")
        .max(10, "We prefer insecure system, try a shorter password."),
      confirmPassword: yup
        .string()
        .required()
        .label("Confirm password")
        .test("passwords-match", "Passwords must match ya fool", function(
          value
        ) {
          return this.parent.password === value;
        })
    });
    return (
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values, actions) => {
         
         this.props.onAuthentication(JSON.stringify(values))
         this.props.history.push( '/houses');
            actions.setSubmitting(false);
      
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <div className='Auth'>
            <h1>Login</h1>
            <FormikStyle
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoFocus
            />

            <FormikStyle
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="password"
              type="password"
            />
            <FormikStyle
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirm password"
              type="password"
            />

            <button   type="button" className="btn btn-dark"onClick={formikProps.handleSubmit} disabled={formikProps.isSubmitting}>LOGIN</button>
          </div>
        )}
      </Formik>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    data :state.auth.data,
  };
}
const mapDispatchToProps = dispatch => {
  return {
      onAuthentication: (values) => dispatch(actions.authStart(values)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
