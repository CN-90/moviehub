import authActionTypes from './auth.types';

const INITIAL_STATE = {
  error: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP_SUCCESS:
      return state;
    case authActionTypes.SIGN_UP_FAIL:
      return {
        error: action.payload
      };

    case authActionTypes.CLEAR_ERROR_MESSAGE:
      return {
        error: ''
      };

    default:
      return state;
  }
};

export default authReducer;
