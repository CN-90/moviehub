import userActionTypes from './user.types';
import { firestore } from '../../firebase/firebase.utils';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const updateUserFavorites = favorites => ({
  type: userActionTypes.UPDATE_USER_FAVORITES,
  payload: favorites
});

export const addUserReview = reviewDetails => {
  const { movieId, userId } = reviewDetails;
  return async dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);
    const reviewSnapShot = await usersMovieReview.get();
    if (!reviewSnapShot.exists) {
      reviewBatch.set(usersMovieReview, reviewDetails);
      reviewBatch.set(movieReviews, reviewDetails);
      reviewBatch
        .commit()
        .then(data => {
          dispatch({
            type: userActionTypes.SET_USER_REVIEWS,
            payload: reviewDetails
          });
          dispatch({ type: userActionTypes.ADD_REVIEW_SUCCESS });
        })
        .catch(err => console.log(err));
    } else {
      return;
    }
  };
};

export const deleteUserReview = (userId, movieId) => {
  return dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);

    reviewBatch.delete(usersMovieReview);
    reviewBatch.delete(movieReviews);
    reviewBatch
      .commit()
      .then(() => {
        dispatch({
          type: 'DELETE_REVIEW',
          payload: { movieId, userId }
        });
        // dispatch({ type: 'DELETE_REVIEW_SUCCESS' });
      })
      .catch(err => console.log(err));
  };
};

export const updateUserReview = reviewDetails => {
  let { userId, movieId } = reviewDetails;
  return async dispatch => {
    let reviewBatch = firestore.batch();
    let usersMovieReview = firestore.doc(`/users/${userId}/reviews/${movieId}`);
    let movieReviews = firestore.doc(`Movies/${movieId}/reviews/${userId}`);

    reviewBatch.update(usersMovieReview, reviewDetails);
    reviewBatch.update(movieReviews, reviewDetails);
    reviewBatch
      .commit()
      .then(() => {
        dispatch({
          type: 'UPDATE_REVIEW',
          payload: reviewDetails
        });
        // dispatch({ type: 'DELETE_REVIEW_SUCCESS' });
      })
      .catch(err => console.log(err));
  };
};
