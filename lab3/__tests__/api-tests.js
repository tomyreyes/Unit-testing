const getMovies = require('../getMovies/getMovies')
const axios = require('axios')

jest.mock('axios')

it('status 200', ()=> {
  const res = { status: 200 }
  axios.get.mockResolvedValue(res)

  return getMovies().then(status => expect(status).toBe(res.status))
})



