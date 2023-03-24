import React, {Component} from 'react'
import './MovieDetails.css'
import Movie from "../Movie/Movie.js"

class MovieDetails extends Component {
  constructor({movies}) {
    super()
    this.state = {
      movies
    }
  }

  render() {
    console.log(this.state.movies)
    const movieCards = this.state.movies.map(movie => {
      return(
          <Movie
            poster_path={movie.poster_path}
          />
        )
    })
    return <div className='movie-cards'>{movieCards}</div>
  }
}

export default MovieDetails;