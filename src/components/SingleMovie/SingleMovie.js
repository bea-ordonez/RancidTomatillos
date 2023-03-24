import React, {Component} from 'react';
import './SingleMovie.css';
import {movieData, singleMovieInfo} from '../Movie/MovieData.js';

class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {singleMovie : singleMovieInfo.movie};
    }

    render() {
        console.log('singleMovie',this.state.singleMovie)
        return (
          <div className="single-movie">  
            <button>Home Page</button>
            <p>{this.state.singleMovie.title}</p>
            <img className="background-image" id={this.state.singleMovie.id} key={this.state.singleMovie.id} src={this.state.singleMovie.backdrop_path} alt={`${this.state.singleMovie.title} movie poster`} />
            <p>Release Date: {this.state.singleMovie.release_date}</p>
            <p>Summary: {this.state.singleMovie.overview}</p>
            <p>Rating: {this.state.singleMovie.average_rating} TOMATOES</p>
            <p>Category: {this.state.singleMovie.genres}</p>
            <p>Runtime: {this.state.singleMovie.runtime}</p>
            <p>{this.state.singleMovie.tagline}</p>
          </div>
        );
    };
}



export default SingleMovie;
