import React, {Component} from 'react'
import './Movie.css'

const Movie = ({title, poster_path, background_path, average_rating, release_date, id}) => {
  return (
      <div className='single-movie-card'>
        <h3>{title}</h3>
        <img className="poster-image" src={poster_path} alt={`${title} movie poster`} />
        <img className="background-image" src={background_path} alt={`${title} movie poster`} />
        <p>{average_rating}</p>
        <p>{release_date}</p>
      </div>
  )
}


export default Movie;