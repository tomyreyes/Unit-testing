const Axios = require('axios')
const tmdbAPI = '2d1610b0077610c43b2fe59ad827cfec'


const getMovies = () => {
  return Axios.get('/getmovies').then(res => res.status)
}


module.exports = getMovies
