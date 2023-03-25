import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import {movieData, singleMovieInfo} from '../Movie/MovieData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = () => {
    this.setState( {movies: movieData.movies });
  }

  showSingleMovie = (id) => {
    console.log('suuup')
    console.log(id)
  }

  render() {
    return (
        <main>
          <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1>
          {this.state.movies.length ? <MovieContainer movies={this.state.movies} showSingleMovie={this.showSingleMovie} /> : <p>Loadingggg.....</p>}
          <SingleMovie />
        </main>
    );
  }
}

export default App;
