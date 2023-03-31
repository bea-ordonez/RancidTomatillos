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
    };
  }

  componentDidMount = () => {
    fetchPromises("movies")
    .then((data) =>  this.setState({movies: data.movies}))
    .catch((error) => this.setState( {error: "Something went wrong wrong"}));
  }


  render() {
    console.log('error' , this.state.singleMovie.id)
    return (
      <main>
          <Route path="/:movieId" render={({match}) => <SingleMovie movieId={parseInt(match.params.movieId)} />} />
          <Route exact path={"/"}>
            {!this.state.movies.length ?  <h1 className='loading-message'>Loading...</h1> : <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1> }
            <MovieContainer movies={this.state.movies} showSingleMovie={this.showSingleMovie} /> 
          </Route>
          <Route path="*">
            {/* {this.state.singleMovie.id == undefined && <Error />} */}
            <Error />
          </Route>
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