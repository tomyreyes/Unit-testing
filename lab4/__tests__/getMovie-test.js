const getMovie = require('../getMovie')
const mocks = require('../mocks/getMovie')

jest.mock('../mocks/getMovie')

it('status is 200', ()=>{
    expect(getMovie({
    url:'/getmovie',
    params: {
      api: '123'
    }
  })).toBe(200)
})