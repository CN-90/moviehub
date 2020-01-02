import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInContainer, ButtonsContainer } from './SignIn.styles';
import FormInput from './../form-input/Form-input.component';
import { signInWithGoogle, auth } from './../../firebase/firebase.utils';
import Button from './../button/Button.component';

const SignIn = () => {
  const [userCredientials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUserCredentials({
      ...userCredientials,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleSignIn = e => {
    e.preventDefault();
    signInWithGoogle();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredientials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignInContainer onSubmit={handleSubmit}>
      <h1>Welcome Back!</h1>
      <p>Sign in Below</p>
      <FormInput
        name="email"
        onChange={handleChange}
        value={userCredientials.email}
        label="Email"
      />
      <FormInput
        name="password"
        value={userCredientials.password}
        onChange={handleChange}
        label="Password"
        type="password"
      />
      <p style={{ paddingTop: '20px' }}>
        <Link to="/signup">No Account? Click Here to Sign Up.</Link>
      </p>
      <ButtonsContainer>
        <Button type="submit">Sign In</Button>
        <Button onClick={handleGoogleSignIn} isGoogle>
          Sign In With Google
        </Button>
      </ButtonsContainer>
    </SignInContainer>
  );
};

export default SignIn;
