import React, {Component} from 'react'
import './SingleMovie.css'
import {movieData, singleMovieInfo} from "../Movie/MovieData.js"

class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {singleMovie : singleMovieInfo.movie};
    }

    render() {
        console.log('singleMovie',this.state.singleMovie)
        return (
          <div className="single-movie">  
            <p>{this.state.singleMovie.title}</p>
            <img className="background-image" id={this.state.singleMovie.id} key={this.state.singleMovie.id} src={this.state.singleMovie.backdrop_path} alt={`${this.state.singleMovie.title} movie poster`} />
          </div>
        )
    }
}



export default SingleMovie;
