import Axios from 'axios';

//Fetch movie details and crew details about specific movie.
export const fetchMovieAsync = async id => {
  let movieInfo, movieCredits;
  try {
    movieInfo = await Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${''}&language=en-US&append_to_response=videos`
    );
    movieCredits = await Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${''}`
    );
  } catch (err) {
    console.log(err);
  }

  return Promise.all([movieInfo, movieCredits]);
};

//Fetch all movies under a specific category - e.g Upcoming movies, popular movies, etc...
export const fetchMoviesAsync = (category, pageNumber) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${''}&language=en-US&page=${pageNumber}`
  );
};

export const fetchMoviesSearchAsync = (searchTerm, pageNumber) => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${''}&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`
  );
};
