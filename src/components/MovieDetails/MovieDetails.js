import React, {Component} from 'react'
import './MovieDetails.css'
import Movie from "../Movie/Movie.js"

class MovieDetails extends Component {
  constructor({movies}) {
    super()
    this.state = {}
  }

  render() {
    const movieCards = movies.map(movie => {
      return(
        <Movie 
          title={movie.title}
          poster_path={movie.poster_path}
          backdrop_path={movie.backdrop_path}
          average_rating={movie.average_rating}
          release_date={movie.release_date}
          id={movie.id}
        />
        )
    })
    return <div className='movie-cards'>{movieCards}</div>
  }
}

export default MovieDetails;