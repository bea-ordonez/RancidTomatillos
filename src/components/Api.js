const fetchAllMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
        (response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Error. No such path.")
          }
        }
    )
}

const fetchMovieTrailer = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_${id}/videos`).then(
        (response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Error. No such path.")
          }
        }
    )
}

const fetchSingleMovie= (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_${id}`).then(
        (response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Error. No such path.")
          }
        }
    )
}

export {fetchAllMovies, fetchMovieTrailer, fetchSingleMovie };