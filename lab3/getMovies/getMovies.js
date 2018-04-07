const getMovies = axios => {
  return axios('https://api.themoviedb.org/3/discover/movie')
  .then(res => {
    status: 200
  })
  return Promise.resolve()
}

module.exports = getMovies
