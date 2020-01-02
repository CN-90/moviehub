import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from './../../firebase/users.utils';
import { validateSignup } from '../../utils/utils';
import authActionTypes from './auth.types';

export const SignUpThroughEmail = (
  email,
  password,
  passwordConfirm,
  additionalData
) => {
  return async dispatch => {
    let isValid = await validateSignup(
      password,
      passwordConfirm,
      additionalData.displayName
    );
    if (Object.entries(isValid).length !== 0) {
      dispatch({ type: authActionTypes.SIGN_UP_FAIL, payload: isValid.error });
      setTimeout(() => {
        dispatch({ type: authActionTypes.CLEAR_ERROR_MESSAGE });
      }, 3000);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, additionalData);
      dispatch({ type: authActionTypes.SIGN_UP_SUCCESS });
    } catch (err) {
      dispatch({ type: authActionTypes.SIGN_UP_FAIL, payload: err.message });
      setTimeout(() => {
        dispatch({ type: authActionTypes.CLEAR_ERROR_MESSAGE });
      }, 3000);
    }
  };
};

export const SignInThroughEmail = (email, password, additionalData) => {
  return async dispatch => {};
};
