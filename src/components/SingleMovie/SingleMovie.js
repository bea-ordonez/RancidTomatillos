import React, {Component} from "react";
import "./SingleMovie.css";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";
// import { render } from "@testing-library/react";
import fetchPromises from '../Api';
import Error from "../Error/Error";

class SingleMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleMovieSelected: null,
      singleMovieVideos: [],
      singleMovieError: [],
      loading: true,
      error: false
    }
  }
 

componentDidMount = () => {
  fetchPromises(`movies/${this.props.movieId}`)
    .then((data) => this.setState({singleMovieSelected: data.movie, loading: false}))
    .catch((error) => this.setState( {error: true}))

    fetchPromises(`movies/${this.props.movieId}/videos`)
    .then((data) => this.setState({singleMovieVideos: data.videos}))
    .catch((error) => this.setState( {error: true}))
  }
  
  
  getMovieTrailer = () => {
    if(this.state.singleMovieVideos.length) {
      const trailerMovie = this.state.singleMovieVideos.find((video) => video.type === "Trailer" && video.site === "YouTube")
      return trailerMovie.key
    }
  }
  
render() {

  if(this.state.loading) {
    return
  } else {
  return (
    <div
    className="single-movie" style={{ backgroundImage: `url("${this.state.singleMovieSelected.backdrop_path}")` }} >
      <Link to="/">
      <button className="single-movie-button">Back To Home</button>
      </Link>
      <div className="movie-details">
        <h1>Title: {this.state.singleMovieSelected.title}</h1>
        <p>{this.state.singleMovieSelected.tagline}</p>
        <p>Release Date: {this.state.singleMovieSelected.release_date}</p>
        <p>Synopsis: {this.state.singleMovieSelected.overview}</p>
        <p>Rating: {this.state.singleMovieSelected.average_rating}/ 10 🍅 </p>
        <p>Genre: {this.state.singleMovieSelected.genres}</p>
        <p>Runtime: {this.state.singleMovieSelected.runtime} minutes</p>
        {this.state.singleMovieVideos.length && (
          <iframe
          src={`https://www.youtube.com/embed/${this.getMovieTrailer()}`}
          allowFullScreen
          title="video"
          width={500}
          height={250}
          ></iframe>
          )}
        {!this.state.singleMovieVideos.length && <h1>"Sorry no trailer available"</h1>}
      </div>
    </div>
  );
}
}
}
  




export default SingleMovie;


SingleMovie.defaultProps = {
  movieId: PropTypes.string.isRequired
}
