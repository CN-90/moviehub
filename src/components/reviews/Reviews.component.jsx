import React, { useState, useEffect } from 'react';
import { ReviewsContainer, ReviewContainer } from './Reviews.styles';
import Button from './../button/Button.component';
import Review from './review/Review.component';
import ReviewForm from './review-form/ReviewForm.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovieReviews } from '../../redux/movies/movie.actions';
import { isCurrentMovieReviewed } from '../../utils/utils';
import Loading from './../loader/Loading.component';

const Reviews = ({
  currentMovie,
  currentUser,
  history,
  fetchMovieReviews,
  reviews
}) => {
  const [formHidden, toggleFormHidden] = useState(true);
  const [isMovieReviewed, setIsMovieReviwed] = useState({});
  const isUserSignedIn = currentUser ? currentUser : false;

  const onClickHandler = () => {
    if (!currentUser) {
      history.push('/signup');
      return;
    }
    toggleFormHidden(!formHidden);
  };

  useEffect(() => {
    fetchMovieReviews(currentMovie.movieInfo.id);
    if (currentUser) {
      setIsMovieReviwed(
        isCurrentMovieReviewed(currentUser, currentMovie.movieInfo.id)
      );
    }
  }, [
    setIsMovieReviwed,
    currentUser,
    fetchMovieReviews,
    currentMovie.movieInfo.id
  ]);

  // Filter out the logged in users review from the rest.
  let filteredReviews = isMovieReviewed.review
    ? reviews.filter(
        reviews => reviews.userId !== isMovieReviewed.review.userId
      )
    : reviews;

  return reviews ? (
    <ReviewsContainer>
      <h1>
        Reviews ({reviews.length})
        <Button onClick={onClickHandler}>
          {isMovieReviewed.beenReviewed ? 'Edit Review' : 'Leave Review'}
        </Button>
      </h1>
      <ReviewForm
        userId={isUserSignedIn.id}
        displayName={isUserSignedIn.displayName}
        movieTitle={currentMovie.movieInfo.title}
        movieId={currentMovie.movieInfo.id}
        posterPath={currentMovie.movieInfo.poster_path}
        formHidden={formHidden}
        toggleFormHidden={toggleFormHidden}
        editMode={isMovieReviewed.review}
        setIsMovieReviwed={setIsMovieReviwed}
      />
      {isMovieReviewed.review && formHidden ? (
        <Review
          reviewDetails={isMovieReviewed.review}
          currentUser={currentUser}
          setIsMovieReviwed={setIsMovieReviwed}
        />
      ) : null}
      <ReviewContainer>
        {filteredReviews.map(review => (
          <Review key={review.displayName} reviewDetails={review} />
        ))}
      </ReviewContainer>
    </ReviewsContainer>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  reviews: state.movie.movieReviews
});

const mapDispatchToProps = dispatch => ({
  fetchMovieReviews: movieId => dispatch(fetchMovieReviews(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Reviews));
