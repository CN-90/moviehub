import React from 'react';
import Actor from './Actor.component';
import { MovieCastContainer, ActorsContainer } from './Movie-cast.styles';

const MovieCast = ({ cast: { cast } }) => {
  return cast.length ? (
    <MovieCastContainer>
      <h1>Cast</h1>
      <ActorsContainer>
        {cast.slice(0, 10).map(actor => {
          return (
            <Actor
              key={actor.cast_id}
              image={actor.profile_path}
              name={actor.name}
            />
          );
        })}
      </ActorsContainer>
    </MovieCastContainer>
  ) : null;
};

export default MovieCast;
