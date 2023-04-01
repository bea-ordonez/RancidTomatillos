import React from 'react';
import './Movie.css';
import PropTypes from "prop-types";
import { Link }  from "react-router-dom";

const Movie = ({title, poster_path, id}) => {
  return (
      
        <Link to={`/${id}`}>
          <div className='single-movie-card'>
            <img className="poster-image" id={id} key={id} src={poster_path} alt={`${title} movie poster`} />
          </div>
        </Link>
      
  );
}

export default Movie;


Movie.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
}