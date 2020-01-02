import React from 'react';
import { PageTitle, MoviesGrid } from './../../app.styles';
import { connect } from 'react-redux';
import MovieCard from '../../components/movie-card/MovieCard.Component';
import { Loader } from 'react-loader-spinner';

const Favorites = ({ currentUser }) => {
  return (
    <div>
      <PageTitle>
        {currentUser.favorites.length
          ? `Favorites (${currentUser.favorites.length})`
          : 'Favorites'}
      </PageTitle>
      <MoviesGrid>
        {currentUser ? (
          currentUser.favorites.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                image={movie.poster}
                id={movie.id}
                title={movie.title}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </MoviesGrid>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Favorites);
