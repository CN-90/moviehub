import React from 'react';
import {
  ReviewContainer,
  ReviewUsername,
  ReviewSummary,
  ReviewButtons
} from './Review.styles';
import Rating from './../../rating/Rating.component';
import Button from './../../button/Button.component';
import { deleteUserReview } from './../../../redux/user/user.actions';
import { connect } from 'react-redux';

const Review = ({
  reviewDetails,
  currentUser,
  setIsMovieReviwed,
  deleteUserReview,
  displayTitle
}) => {
  const handleDeleteClick = (userId, movieId) => {
    if (setIsMovieReviwed) {
      setIsMovieReviwed({});
    }
    deleteUserReview(userId, movieId);
  };

  return (
    <ReviewContainer>
      <ReviewUsername>
        {!displayTitle ? reviewDetails.displayName : reviewDetails.movieTitle}
      </ReviewUsername>
      <Rating rating={reviewDetails.movieRating} changeable={null} />
      <ReviewSummary>
        <p>{reviewDetails.movieSummary}</p>
      </ReviewSummary>
      {currentUser ? (
        <ReviewButtons>
          <Button
            onClick={() =>
              handleDeleteClick(currentUser.id, reviewDetails.movieId)
            }
          >
            Delete
          </Button>
        </ReviewButtons>
      ) : null}
    </ReviewContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteUserReview: (userId, movieId) =>
    dispatch(deleteUserReview(userId, movieId))
});
export default connect(null, mapDispatchToProps)(Review);
