import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import {movieData, singleMovieInfo} from '../Movie/MovieData.js';
import {fetchAllMovies, fetchMovieTrailer, fetchSingleMovie } from '../Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      singleMovieChosen: false
    };
  }

  componentDidMount = () => {
    // this.setState( {movies: movieData.movies });
    fetchAllMovies()
    .then((data) =>  this.setState({movies: data.movies}))
    .catch(() => console.log("Error, cannot fulfill request." ))
  }

  showSingleMovie = (id) => {
    // const foundMovie = this.state.movies.find(movie => movie.id == id);
    // this.setState( {singleMovie: foundMovie, singleMovieChosen: true});
    fetchSingleMovie(id)
    .then((data) => this.setState({singleMovie: data.movie, singleMovieChosen: true}))
  }

  showAllMovies = () => {
    this.setState({ singleMovie: {},  singleMovieChosen: false });
  }

  render() {
    return (
        <main>
          <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1>
          {this.state.singleMovieChosen && <SingleMovie singleMovie={this.state.singleMovie} showAllMovies={this.showAllMovies} />}
          {!this.state.singleMovieChosen &&  <MovieContainer movies={this.state.movies} showSingleMovie={this.showSingleMovie} /> } 
        </main>
    );
  }
}

export default App;
