import React from "react";
import "./SingleMovie.css";
import PropTypes from "prop-types";

const SingleMovie = ({ singleMovie, showAllMovies, trailer }) => {
  console.log(trailer);
  const trailerMovie = trailer.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  let movKey;
  !trailerMovie == [] ? (movKey = trailerMovie.key) : (movKey = false);

  return (
    <div
      className="single-movie"
      style={{ backgroundImage: `url("${singleMovie.backdrop_path}")` }}
    >
      <button className="single-movie-button" onClick={() => showAllMovies()}>
        Back To Home
      </button>
      <div className="movie-details">
        <h1>{singleMovie.title}</h1>
        <p>{singleMovie.tagline}</p>
        <p>Release Date: {singleMovie.release_date}</p>
        <p>Synopsis: {singleMovie.overview}</p>
        <p>Rating: {singleMovie.average_rating} 🍅 </p>
        <p>Genre: {singleMovie.genres}</p>
        <p>Runtime: {singleMovie.runtime} minutes</p>
        {movKey && (
          <iframe
            src={`https://www.youtube.com/embed/${movKey}`}
            allowFullScreen
            title="video"
            width={550}
            height={300}
          ></iframe>
        )}
        {movKey === false && <h1>"Sorry no trailer available"</h1>}
      </div>
    </div>
  );
};

export default SingleMovie;

SingleMovie.propTypes = {
  showAllMovies: PropTypes.func.isRequired,
  singleMovie: PropTypes.object.isRequired
}
