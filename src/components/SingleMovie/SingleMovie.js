import React from "react";
import "./SingleMovie.css";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";

const SingleMovie = ({ singleMovie, showAllMovies, videos }) => {
  const trailerMovie = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  let movieKey;
  trailerMovie == [] ? (movieKey = false) : (movieKey = trailerMovie.key);

  return (
    <div
      className="single-movie"
      style={{ backgroundImage: `url("${singleMovie.backdrop_path}")` }}
    >
      <Link to="/">
      <button className="single-movie-button" onClick={() => showAllMovies()}>
        Back To Home
      </button>
      </Link>
      <Link to="/">
      <h1 className="header-title">Bea &amp; Travis's Movie Cinema</h1>
      </Link>
      <div className="movie-details">
        <h1>Title: {singleMovie.title}</h1>
        <p>{singleMovie.tagline}</p>
        <p>Release Date: {singleMovie.release_date}</p>
        <p>Synopsis: {singleMovie.overview}</p>
        <p>Rating: {singleMovie.average_rating} 🍅 </p>
        <p>Genre: {singleMovie.genres}</p>
        <p>Runtime: {singleMovie.runtime} minutes</p>
        {movieKey && (
          <iframe
            src={`https://www.youtube.com/embed/${movieKey}`}
            allowFullScreen
            title="video"
            width={550}
            height={300}
          ></iframe>
        )}
        {movieKey === false && <h1>"Sorry no trailer available"</h1>}
      </div>
    </div>
  );
};

export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired,
  singleMovie: PropTypes.object.isRequired,
  video: PropTypes.arrayOf()
}
