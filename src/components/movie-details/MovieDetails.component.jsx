import React from 'react';
import {
  MovieDetailsContainer,
  MovieImg,
  MovieSummary,
  MovieInfo
} from './MovieDetails.styles';
import FavoriteButton from '../favorite-button/FavoriteButton.component';
import {
  getMovieGenres,
  getDirectorsName,
  formatMovieReleaseDate
} from '../../utils/utils';

const MovieDetails = ({
  id,
  title,
  summary,
  genres,
  poster,
  crew,
  release_date
}) => {
  const yearOfRelease = formatMovieReleaseDate(release_date);
  const directorName = getDirectorsName(crew);
  const movieGenres = getMovieGenres(genres);

  return (
    <MovieDetailsContainer>
      <MovieImg>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt=""
          style={{ width: '100%', height: '80%' }}
        />

        <FavoriteButton movieId={id} title={title} poster={poster} />
      </MovieImg>
      <MovieInfo>
        <h1 style={{ paddingBottom: '3px' }}>
          {title} {yearOfRelease ? `(${yearOfRelease})` : ''}
        </h1>
        <h3
          className="yellow"
          style={{ fontWeight: 'normal', marginBottom: '5px' }}
        >
          {movieGenres}
        </h3>
        <h3 style={{ fontWeight: 'normal', color: '#dcdcdc' }}>
          {directorName.length ? directorName[0].name : 'N/A'}
        </h3>
        <MovieSummary>{summary}</MovieSummary>
      </MovieInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
