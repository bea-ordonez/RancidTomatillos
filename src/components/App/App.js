import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import Error from '../Error/Error';
import fetchPromises from '../Api';
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      singleMovieTrailer: [],
      error: "",
      loading: true
    };
  }

  componentDidMount = () => {
    fetchPromises("movies")
    .then((data) =>  this.setState({movies: data.movies}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}));
  }

  showSingleMovie = (id) => {
    fetchPromises(`/movies/${id}`)
    .then((data) => this.setState({singleMovie: data.movie}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}))

    fetchPromises(`/movies/${id}/videos`)
    .then((data) => this.setState({singleMovieTrailer: data.videos, loading: false}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}))
  }

  showAllMovies = () => {
    this.setState({ singleMovie: {}, singleMovieTrailer: []  });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path={`/${this.state.singleMovie.id}`}>
            {this.state.loading ?  <h1 className='loading-message'>Loading...</h1> : <SingleMovie singleMovie={this.state.singleMovie} videos={this.state.singleMovieTrailer} showAllMovies={this.showAllMovies} /> }
            {this.state.error && <h1 className='error-message'>Server Error! Please try again</h1>}
          </Route>
          <Route exact path={"/"}>
            {!this.state.movies.length ?  <h1 className='loading-message'>Loading...</h1> : <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1> }
            <MovieContainer movies={this.state.movies} showSingleMovie={this.showSingleMovie} /> 
            {this.state.error && <h1 className='error-message'>Server Error! Please try again</h1>}
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;

App.propTypes = {
  showAllMovies: PropTypes.func,
  showSingleMovie: PropTypes.func,
  singleMovie: PropTypes.object,
  movies: PropTypes.array,
  videos: PropTypes.arrayOf()
}