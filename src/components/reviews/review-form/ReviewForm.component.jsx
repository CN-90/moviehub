import React, { useState, useEffect } from 'react';
import { ReviewFormContainer, ReviewTextArea } from './ReviewForm.styles';
import Rating from '../../rating/Rating.component';
import Button from './../../button/Button.component';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {
  addUserReview,
  updateUserReview
} from '../../../redux/user/user.actions';

const ReviewForm = ({
  formHidden,
  toggleFormHidden,
  movieTitle,
  movieId,
  addUserReview,
  updateUserReview,
  userId,
  posterPath,
  displayName,
  editMode
}) => {
  const [movieRating, setRating] = useState(0);
  const [movieSummary, setSummary] = useState('');

  useEffect(() => {
    if (editMode) {
      setSummary(editMode.movieSummary);
      setRating(editMode.movieRating);
    } else {
      setSummary('');
      setRating(0);
    }
  }, [setSummary, editMode]);

  const onEnterSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      onSubmit(e);
    }
  };

  const handleChange = e => {
    setSummary(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (movieRating === 0) {
      alert(`You must select a rating for ${movieTitle}`);
      return;
    }
    let reviewDetails = {
      movieTitle,
      movieId,
      movieSummary,
      movieRating,
      userId,
      displayName,
      posterPath
    };
    if (editMode) {
      updateUserReview(reviewDetails);
    } else {
      addUserReview(reviewDetails);
    }
    toggleFormHidden(true);
  };

  return (
    <ReviewFormContainer isHidden={formHidden}>
      <h1>{movieTitle}</h1>
      <span onClick={() => toggleFormHidden(!formHidden)}>
        <FontAwesomeIcon icon={faTimesCircle} color={'gray'} />
      </span>
      <div>
        <Rating
          style={{ paddingBottom: '100px' }}
          rating={movieRating}
          changeable={setRating}
        />
      </div>
      <form onSubmit={onSubmit}>
        <ReviewTextArea
          onKeyDown={onEnterSubmit}
          value={movieSummary}
          onChange={handleChange}
          placeholder={`Leave your review for ${movieTitle}`}
        ></ReviewTextArea>
        <Button type="submit">{editMode ? 'Update' : 'Submit'}</Button>
      </form>
    </ReviewFormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addUserReview: reviewDetails => dispatch(addUserReview(reviewDetails)),
  updateUserReview: reviewDetails => dispatch(updateUserReview(reviewDetails))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
