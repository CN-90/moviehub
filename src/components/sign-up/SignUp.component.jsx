import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './../form-input/Form-input.component';
import {
  SignUpContainer,
  ButtonsContainer,
  ErrorContainer
} from './SignUp.styles';
import Button from '../button/Button.component';
import { connect } from 'react-redux';
import { SignUpThroughEmail } from '../../redux/auth/auth.actions';
import ErrorMessage from './../error-message/ErrorMessage.component';

const SignUp = ({ SignUpThroughEmail, errorMessage }) => {
  const [userCredientials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { displayName, email, password, passwordConfirm } = userCredientials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredientials,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    SignUpThroughEmail(email, password, passwordConfirm, { displayName });
  };
  return (
    <SignUpContainer onSubmit={handleSubmit}>
      {errorMessage ? (
        <ErrorContainer>
          <ErrorMessage errorMsg={errorMessage} />
        </ErrorContainer>
      ) : null}

      <h1>Don't have an account?</h1>
      <p>Sign up with email and password</p>
      <FormInput
        onChange={handleChange}
        name="displayName"
        value={displayName}
        label="Display Name"
        type="text"
      />
      <FormInput
        onChange={handleChange}
        name="email"
        value={email}
        label="Email"
        type="email"
      />
      <FormInput
        onChange={handleChange}
        name="password"
        value={password}
        label="Password"
        type="password"
      />
      <FormInput
        onChange={handleChange}
        name="passwordConfirm"
        value={passwordConfirm}
        label="Confirm Password"
        type="password"
      />
      <p style={{ paddingTop: '20px' }}>
        <Link to="/signin">Have an Account? Click here to sign in.</Link>
      </p>
      <ButtonsContainer>
        <Button>Sign Up</Button>
      </ButtonsContainer>
    </SignUpContainer>
  );
};

const mapStateToProps = ({ auth }) => ({
  errorMessage: auth.error
});

const mapDispatchToProps = dispatch => ({
  SignUpThroughEmail: (email, password, passwordConfirm, additionalData) =>
    dispatch(
      SignUpThroughEmail(email, password, passwordConfirm, additionalData)
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
