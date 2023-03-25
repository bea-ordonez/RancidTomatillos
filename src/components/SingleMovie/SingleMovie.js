import React, {Component} from 'react';
import './SingleMovie.css';
import PropTypes from "prop-types";

class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
       const singleMov = this.props.singleMovie

        return (
          <div className="single-movie">  
            <button onClick={() => this.props.showAllMovies()}>Home Page</button>
            <p>{singleMov.title}</p>
            <p>{singleMov.tagline}</p>
            <img className="background-image" id={singleMov.id} key={singleMov.id} src={singleMov.backdrop_path} alt={`${singleMov.title} movie poster`} />
            <p>Release Date: {singleMov.release_date}</p>
            <p>Synopsis: {singleMov.overview}</p>
            <p>Rating: {singleMov.average_rating} 🍅 </p>
            <p>Genre: {singleMov.genres}</p>
            <p>Runtime: {singleMov.runtime}</p>
            
            
          </div>
        );
    };
}


export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired
}