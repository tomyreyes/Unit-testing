const Axios = require('axios')
const tmdbAPI = '2d1610b0077610c43b2fe59ad827cfec'

const result = Axios({
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    // include_adult: 'false',
    // page: 1,
    // language: 'en-US',
    api_key: tmdbAPI,
    // external_source: 'imdb_id',
    // primary_release_year: 2011,
    // with_genres: 28,
    // sort_by: 'popularity.desc',
    // include_adult: 'false',
    // include_video: 'false'
  }
}).then(res => {
  console.log(res)
})


