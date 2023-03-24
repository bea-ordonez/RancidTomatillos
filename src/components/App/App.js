import React, { Component } from "react";
import "./App.css";
import MovieContainer from "../MovieContainer/MovieContainer.js"
// import movieData from "../Movie/MovieData.js"
import {movieData, singleMovieInfo} from "../Movie/MovieData.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log(movieData.movies)
    this.setState( {movies: movieData.movies })
  }

  render() {
    return (
        <main>
          <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1>
          {this.state.movies.length ? <MovieContainer movies={this.state.movies} /> : <p>Loadingggg.....</p>}
        </main>
         
    );
  }
}

export default App;
