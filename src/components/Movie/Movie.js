import React, {Component} from 'react'
import './Movie.css'

const Movie = ({title, poster_path, id}) => {
  return (
      <div className='single-movie-card'>
        <img className="poster-image" id={id} key={id} src={poster_path} alt={`${title} movie poster`} />
        {/* <img className="background-image" src={background_path} alt={`${title} movie poster`} /> */}
      </div>
  )
}


export default Movie;