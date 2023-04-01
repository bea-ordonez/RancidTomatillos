import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie.js';
import PropTypes from "prop-types";

const MovieContainer = ({ movies }) => {
  
  const movieCards = movies.map(movie => {
          return(
              <Movie
              poster_path={movie.poster_path}
              id={movie.id}
              title={movie.title}
              key={movie.id}
              />
            );
        });
        return <div className='movie-cards'>{movieCards}</div>
      }

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
}