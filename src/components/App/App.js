import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import Error from '../Error/Error';
import fetchPromises from '../Api';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false
    };
  }

  componentDidMount = () => {
    fetchPromises("movies")
    .then((data) =>  this.setState({movies: data.movies}))
    .catch((error) => this.setState( {error: true}));
  }

  render() {
    return (
      <main>
          {!this.state.movies.length ?  <h1 className='loading-message'>Loading...</h1> : <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1> }
        <Switch>
          <Route path="/:movieId" render={({match}) => <SingleMovie movieId={(match.params.movieId)} />} />
          <Route exact path={"/"}>
            <MovieContainer movies={this.state.movies} /> 
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
