import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie.js';


const MovieContainer = ({ movies }) => {
  const movieCards = movies.map(movie => {
          return(
              <Movie
              poster_path={movie.poster_path}
              id={movie.id}
              />
            );
        });
        return <div className='movie-cards'>{movieCards}</div>
      }




// class MovieContainer extends Component {
//   constructor({movies}) {
//     super()
//     this.state = {
//       movies
//     }
//   }

//   render() {
//     const movieCards = this.state.movies.map(movie => {
//       return(
//           <Movie
//           poster_path={movie.poster_path}
//           id={movie.id}
//           />
//         )
//     })
//     return <div className='movie-cards'>{movieCards}</div>
//   }
// }

export default MovieContainer;