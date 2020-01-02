import userActionTypes from './user.types';
import {
  filterOutUsersDeletedReview,
  filterOutAndAddUpdatedReview
} from './../../utils/utils';

const INITIAL_STATE = {
  // currentUser: { favorites: [], id: '', reviews: [] },
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case userActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case userActionTypes.SIGN_UP_SUCCESS:
    case 'DELETE_REVIEW_SUCCESS':
      return state;

    case userActionTypes.SET_USER_REVIEWS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          reviews: [...state.currentUser.reviews, action.payload]
        }
      };

    case userActionTypes.DELETE_REVIEW:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          reviews: filterOutUsersDeletedReview(
            state.currentUser.reviews.slice(),
            action.payload.movieId
          )
        }
      };

    case userActionTypes.UPDATE_REVIEW:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          reviews: filterOutAndAddUpdatedReview(
            state.currentUser.reviews.slice(),
            action.payload
          )
        }
      };

    case userActionTypes.UPDATE_USER_FAVORITES:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorites: action.payload
        }
      };

    default:
      return state;
  }
};

export default userReducer;
