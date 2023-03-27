import React from 'react';
import './SingleMovie.css';
import PropTypes from "prop-types";

const SingleMovie = ({singleMovie, showAllMovies}) => {
  
  return (
    <div className="single-movie" style={{backgroundImage:`url("${singleMovie.backdrop_path}")`}}>  
      <button onClick={() => showAllMovies()}>Back To Home</button>
      <div className="movie-details">
        <h1>{singleMovie.title}</h1>
        <p>{singleMovie.tagline}</p>
        {/* <img className="background-image" id={singleMovie.id} key={singleMovie.id} src={singleMovie.backdrop_path} alt={`${singleMovie.title} movie poster`} /> */}
        <p>Release Date: {singleMovie.release_date}</p>
        <p>Synopsis: {singleMovie.overview}</p>
        <p>Rating: {singleMovie.average_rating} 🍅 </p>
        <p>Genre: {singleMovie.genres}</p>
        <p>Runtime: {singleMovie.runtime} minutes</p>
      </div>
    </div>
  )
}

export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired,
  singleMovie: PropTypes.object.isRequired
}

