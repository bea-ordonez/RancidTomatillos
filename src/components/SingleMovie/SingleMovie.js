import React, {Component} from 'react';
import './SingleMovie.css';
import {movieData, singleMovieInfo} from '../Movie/MovieData.js';


class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
       const foundMov = this.props.singleMovie

        return (
          <div className="single-movie">  
            <button onClick={() => this.props.showAllMovies()}>Home Page</button>
            <p>{foundMov.title}</p>
            <img className="background-image" id={foundMov.id} key={foundMov.id} src={foundMov.backdrop_path} alt={`${foundMov.title} movie poster`} />
            <p>Release Date: {foundMov.release_date}</p>
            <p>Summary: {foundMov.overview}</p>
            <p>Rating: {foundMov.average_rating} TOMATOES</p>
            <p>Category: {foundMov.genres}</p>
            <p>Runtime: {foundMov.runtime}</p>
            <p>{foundMov.tagline}</p>
          </div>
        );
    };
}
//style={{display: "none" }} 

export default SingleMovie;
