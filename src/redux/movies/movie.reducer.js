import movieActionTypes from './movie.types';
import {
  filterOutMoviesDeletedReview,
  filterOutAndAddUpdatedReview
} from './../../utils/utils';

const INITIAL_STATE = {
  movies: { results: [], totalPages: null },
  movie: {},
  movieReviews: [],
  pageNumber: 1,
  error: null,
  movieSearch: null,
  isFetching: false
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload
      };

    case movieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };

    case movieActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true
      };

    case movieActionTypes.FETCH_MOVIES_FINISH:
      return {
        ...state,
        isFetching: false
      };

    case movieActionTypes.FETCH_MOVIES_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case movieActionTypes.CLEAR_MOVIES:
      return {
        ...state,
        movies: { results: [], totalPages: null }
      };

    case movieActionTypes.SET_SEARCH:
      return {
        ...state,
        movieSearch: action.payload
      };

    case movieActionTypes.SET_MOVIE_REVIEWS:
      return {
        ...state,
        movieReviews: [...action.payload]
      };

    case movieActionTypes.CLEAR_REVIEWS:
      return {
        ...state,
        movieReviews: []
      };

    case 'DELETE_REVIEW':
      return {
        ...state,
        movieReviews: filterOutMoviesDeletedReview(
          state.movieReviews.slice(),
          action.payload.userId
        )
      };

    case 'UPDATE_REVIEW':
      return {
        ...state,
        movieReviews: filterOutAndAddUpdatedReview(
          state.movieReviews.slice(),
          action.payload
        )
      };

    default:
      return state;
  }
};

export default movieReducer;
