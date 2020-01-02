import React, { useEffect } from 'react';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import Loading from '../../components/loader/Loading.component';
import Pagination from '../../components/pagination/Pagination.component';
import { connect } from 'react-redux';
import {
  fetchMoviesByCategory,
  fetchMovieSearch
} from '../../redux/movies/movie.actions';

import { getPageTitle } from '../../utils/utils';
import { PageTitle as MovieCategory, MoviesGrid } from '../../app.styles';

const Movies = props => {
  const { movies, isFetching, fetchMovieSearch, getMovies } = props;
  const category = props.location.pathname.split('/')[2].toLowerCase();
  const { movieName, pageNumber } = props.match.params;
  const title = getPageTitle(category, movieName);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (movieName) {
      fetchMovieSearch(movieName, pageNumber);
    } else {
      getMovies(category, pageNumber);
    }
  }, [category, getMovies, pageNumber, movieName, fetchMovieSearch]);

  const filteredMovies = movies.results.filter(movie => movie.poster_path);
  return isFetching ? (
    <Loading />
  ) : (
    <div>
      <MovieCategory>{title}</MovieCategory>
      <MoviesGrid>
        {filteredMovies.map(movie => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              score={movie.vote_average}
              id={movie.id}
            />
          );
        })}
      </MoviesGrid>
      <Pagination
        pageNumber={pageNumber || 0}
        lastPageNum={movies.totalPages}
        isMovies={movies.results.length}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movie.movies,
  isFetching: state.movie.isFetching,
  movieSearch: state.movie.movieSearch
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (category, pageNumber) =>
      dispatch(fetchMoviesByCategory(category, pageNumber)),
    fetchMovieSearch: (searchTerm, pageNumber) =>
      dispatch(fetchMovieSearch(searchTerm, pageNumber))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
