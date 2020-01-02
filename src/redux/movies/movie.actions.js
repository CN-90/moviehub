import movieActionTypes from './movie.types';
import {
  fetchMovieAsync,
  fetchMoviesAsync,
  fetchMoviesSearchAsync
} from './movie.utils';
import { firestore } from '../../firebase/firebase.utils';

// Fetches a single movie based on movies ID
export const fetchMovie = id => {
  return async dispatch => {
    dispatch(clearMovies());
    dispatch(clearReviews());
    dispatch(fetchMoviesStart());

    await fetchMovieAsync(id)
      .then(movieData => {
        let movieObj = {
          movieInfo: movieData[0].data,
          movieCredits: movieData[1]
        };
        dispatch(fetchMovieSuccess(movieObj));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));

    dispatch(fetchMoviesFinish());
  };
};

// Fetches a movie by category, e.g popular, upcoming, top rated, etc..
export const fetchMoviesByCategory = (category, pageNumber) => {
  return async dispatch => {
    if (pageNumber > 1) dispatch(clearMovies());
    if (category === 'search' && !pageNumber) {
      dispatch(clearMovies());
      return;
    }
    dispatch(fetchMoviesStart());
    await fetchMoviesAsync(category, pageNumber)
      .then(movieData => {
        let movieObj = {
          results: movieData.data.results,
          totalPages: movieData.data.total_pages
        };
        dispatch(fetchMoviesSuccess(movieObj));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));
    dispatch(fetchMoviesFinish());
  };
};

// Fetches movies based on users search
export const fetchMovieSearch = (searchTerm, pageNumber) => {
  return async dispatch => {
    dispatch(fetchMoviesStart());
    await fetchMoviesSearchAsync(searchTerm, pageNumber)
      .then(movieData => {
        let movieObj = {
          results: movieData.data.results,
          totalPages: movieData.data.total_pages
        };
        dispatch(fetchMoviesSuccess(movieObj));
      })
      .catch(err => dispatch(fetchMoviesFailure(err.message)));
    dispatch(fetchMoviesFinish());
  };
};

export const fetchMovieReviews = movieId => {
  return async dispatch => {
    try {
      let movieReviews = await firestore.collection(
        `Movies/${movieId}/reviews`
      );
      const reviewsSnapShot = await movieReviews.get();
      if (!reviewsSnapShot) {
        return;
      } else {
        let reviews = [];
        reviewsSnapShot.forEach(reviewDoc => {
          reviews.push(reviewDoc.data());
        });
        dispatch({
          type: movieActionTypes.SET_MOVIE_REVIEWS,
          payload: reviews
        });
      }
    } catch (err) {
      dispatch(fetchReviewsFailure(err));
    }
  };
};

export const fetchMoviesStart = () => ({
  type: movieActionTypes.FETCH_MOVIES_START
});

export const fetchMoviesFinish = () => ({
  type: movieActionTypes.FETCH_MOVIES_FINISH
});

export const fetchMoviesSuccess = movie => ({
  type: movieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movie
});

export const fetchMovieSuccess = movie => ({
  type: movieActionTypes.FETCH_MOVIE_SUCCESS,
  payload: movie
});

export const fetchMoviesFailure = error => ({
  type: movieActionTypes.FETCH_MOVIES_FAIL,
  payload: error
});

export const clearMovies = () => ({
  type: movieActionTypes.CLEAR_MOVIES
});

export const clearReviews = () => ({
  type: movieActionTypes.CLEAR_REVIEWS
});

export const fetchReviewsFailure = err => ({
  type: movieActionTypes.FETCH_REVIEWS_FAIL,
  payload: err.message
});

export const setSearchQuery = searchTerm => ({
  type: movieActionTypes.SET_SEARCH,
  payload: searchTerm
});
