import React, {Component} from "react";
import "./SingleMovie.css";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";
// import { render } from "@testing-library/react";
import fetchPromises from '../Api';

class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
      singleMovieSelected: null,
      singleMovieVideos: [],
      singleMovieError: []
    }
  }
 

componentDidMount = () => {
  fetchPromises(`/movies/${this.props.MovieId}`)
    .then((data) => this.setState({singleMovieVideos: data.movie}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}))

    fetchPromises(`/movies/${this.props.MovieId}/videos`)
    .then((data) => this.setState({singleMovieTrailer: data.videos}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}))
  }
  
  
  componentDidUpdate = () => {
    let movieKey
    if(this.state.singleMovieVideos) {
      const trailerMovie = this.singleMovieVideos.find((video) => video.type === "Trailer" && video.site === "YouTube")
      movieKey = trailerMovie.key
    }
  }
  
render() {
  return (
    <div
    className="single-movie" style={{ backgroundImage: `url("${this.state.singleMovieSelected.backdrop_path}")` }} >
      <Link to="/">
      <button className="single-movie-button">Back To Home</button>
      </Link>
      <Link to="/">
      <h1 className="single-header-title">Bea &amp; Travis's Movie Cinema</h1>
      </Link>
      <div className="movie-details">
        <h1>Title: {this.props.singleMovieSelected.title}</h1>
        <p>{this.props.singleMovieSelected.tagline}</p>
        <p>Release Date: {this.props.singleMovieSelected.release_date}</p>
        <p>Synopsis: {this.props.singleMovieSelected.overview}</p>
        <p>Rating: {this.props.singleMovieSelected.average_rating}/ 10 🍅 </p>
        <p>Genre: {this.props.singleMovieSelected.genres}</p>
        <p>Runtime: {this.props.singleMovieSelected.runtime} minutes</p>
        {this.state.singleMovieVideos.length && (
          <iframe
          src={`https://www.youtube.com/embed/${movieKey}`}
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
  




export default SingleMovie;


SingleMovie.defaultProps = {
  movieId: PropTypes.number.isRequired
}
