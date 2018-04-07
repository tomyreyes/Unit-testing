const getMovies = require('../getMovies/getMovies')

const tmdbAPI = '2d1610b0077610c43b2fe59ad827cfec'

it('Axios is not being called correctly', (done)=> {
  let fakeAxiosCall = false
  const fakeAxiosGet = (url) => {
    expect(url).toBe('https://api.themoviedb.org/3/discover/movie')
     fakeAxiosCall = true
     return Promise.resolve({
       res: {
         status:
          200
       }
     })
  }
  getMovies(fakeAxiosGet,{
    'apikey': tmdbAPI
  }).then(res => {
    expect(res.status).toBe(200)
    expect(fakeAxiosCall).toBe(true)
    done()
  })
})




