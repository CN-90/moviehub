import React from 'react';
import { Auth, SignUpIn, CharactersPoster } from './Auth.styles';
import SignUp from './../../components/sign-up/SignUp.component';
import SignIn from '../../components/sign-in/SignIn.component';
const AuthPage = props => {
  const currentLocation = props.location.pathname;

  return (
    <Auth>
      <SignUpIn>
        <CharactersPoster />
        {currentLocation === '/signup' ? <SignUp></SignUp> : <SignIn></SignIn>}
      </SignUpIn>
    </Auth>
  );
};

export default AuthPage;
