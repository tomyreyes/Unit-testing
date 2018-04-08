const axios = require('axios')

const getMovie = () => {
    axios({
      method: 'GET',
      url: '/getmovie',
      params: {
        apikey: '123'
      }
    }).then(res => res.status)
}
module.exports = getMovie