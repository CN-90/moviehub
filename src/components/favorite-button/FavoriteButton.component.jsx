import React, { useState, useEffect } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { addorRemoveMovieToFavorites } from '../../firebase/users.utils';
import { withRouter } from 'react-router-dom';
import {
  setCurrentUser,
  updateUserFavorites
} from '../../redux/user/user.actions';
import { realTimeMovieFavorites } from '../../firebase/users.utils';
import { isCurrentMovieLiked } from '../../utils/utils';

const FavoriteButton = ({
  currentUser,
  setCurrentUser,
  history,
  movieId,
  title,
  poster,
  updateUserFavorites
}) => {
  const [isLiked, setLiked] = useState(false);
  currentUser = currentUser || false;

  useEffect(() => {
    // If user is signed in listen for changes to movie favorites, if change is made update user favorites in redux.
    if (currentUser) {
      setLiked(isCurrentMovieLiked(currentUser, movieId));
      let unsubscribeFromFavorites = realTimeMovieFavorites(
        currentUser,
        setCurrentUser
      );
      return () => {
        unsubscribeFromFavorites();
      };
    }
  }, [setCurrentUser, currentUser, movieId]);

  const likeMovie = async (currentUser, movieId, title) => {
    if (!currentUser) {
      history.push('/signup');
      return;
    }
    addorRemoveMovieToFavorites(currentUser.id, movieId, title, poster);
  };

  return (
    <div
      onClick={() => likeMovie(currentUser, movieId, title)}
      style={{
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        background: '#202020',
        cursor: 'pointer'
      }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        color={isLiked ? '#CE2029' : '#919191'}
        size="2x"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateUserFavorites: favorites => dispatch(updateUserFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavoriteButton));
