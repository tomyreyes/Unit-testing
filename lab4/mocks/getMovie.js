const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

mock.onGet('/getmovie', { params: { apikey: '123' } }).reply(200)

mock.onGet('/getmovie', { params: { apikey: '123', genre: 28 } }).reply(200, {
  results: 
    [ { title: 'Thor', genre: 'Action' } ]
})


axios.get('/getmovie', { params: { apikey: '123', genre: 28 } }).then(res => {
  console.log(res.data.results[0].title)
})
