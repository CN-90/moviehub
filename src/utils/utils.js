import { doesUsernameExist } from '../firebase/users.utils';

// return page title depending on url location passed in as title
export const getPageTitle = (title, search) => {
  const titles = {
    top_rated: 'Top Rated',
    upcoming: 'Upcoming Movies',
    popular: 'Popular Movies',
    now_playing: 'Now Playing',
    search: search
      ? `Search results for ${search}`
      : 'Search database for movies'
  };
  return titles[title];
};

// takes all genres of a movie and combines them in a formatted string.
export const getMovieGenres = genreArr => {
  return genreArr.map(genre => genre.name).join(' / ');
};

// Cylcles through movie Crew members and filtres out the director.
export const getDirectorsName = crew => {
  return crew.crew.filter(crewMember => crewMember.job === 'Director');
};

// Formats the movie release date to select only the year of release.
export const formatMovieReleaseDate = release_date => {
  return release_date.split('-')[0];
};

// Checks whether the current movie is liked by a user.
export const isCurrentMovieLiked = (currentUser, id) => {
  if (!currentUser.favorites) return;
  let index = currentUser.favorites.findIndex(movie => movie.id === id);
  return index >= 0;
};

export const isCurrentMovieReviewed = (currentUser, movieId) => {
  let index = currentUser.reviews.findIndex(
    review => review.movieId === movieId
  );
  return {
    beenReviewed: index >= 0,
    review: currentUser.reviews[index]
  };
};

export const filterOutUsersDeletedReview = (currentState, movieId) => {
  return currentState.filter(review => review.movieId !== movieId);
};

export const filterOutMoviesDeletedReview = (currentState, userId) => {
  return currentState.filter(review => review.userId !== userId);
};

export const filterOutAndAddUpdatedReview = (currentState, newReview) => {
  let newReviews = currentState.filter(
    review => review.userId !== newReview.userId
  );
  newReviews.push(newReview);
  return newReviews;
};

// validaes password & username for sign ups.
export const validateSignup = async (passwordOne, passwordTwo, displayName) => {
  let userNameExists = await doesUsernameExist(displayName);
  let validSignUp = {};
  if (passwordOne !== passwordTwo) {
    validSignUp.error = 'Passwords do not match.';
  }
  if (userNameExists) {
    validSignUp.error = 'Username already exists.';
  } else if (displayName === '') {
    validSignUp.error = 'Username is required.';
  } else if (displayName.length <= 4) {
    validSignUp.error = 'Username must be longer than four characters';
  }

  return validSignUp;
};
