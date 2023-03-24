import React, { Component } from "react";
import "./App.css";
import MovieContainer from "../MovieContainer/MovieContainer.js"
// import movieData from "../Movie/MovieData.js"
import {movieData, singleMovieInfo} from "../Movie/MovieData.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: singleMovieInfo.movie
    };
  }

  // componentDidMount(movieData) {
  //   console.log(movieData.movies)
  //   this.setState( {movies: movieData.movies })
  // }

  render() {
    return (
        <main>
          <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1>
          <MovieContainer movies={this.state.movies} />
          <p>{this.state.singleMovie}</p>
        </main>
         
    );
  }
}

export default App;
