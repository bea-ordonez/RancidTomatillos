import React, {Component} from 'react';
import './Movie.css';
import PropTypes from "prop-types";

const Movie = ({title, poster_path, id, showSingleMovie}) => {
  return (
      <div className='single-movie-card'>
        <img className="poster-image" onClick={() => showSingleMovie(id)} id={id} key={id} src={poster_path} alt={`${title} movie poster`} />
      </div>
  );
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  showSingleMovie: PropTypes.func.isRequired
}