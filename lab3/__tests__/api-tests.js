const getMovies = require('../sandbox')

const tmdbAPI = '2d1610b0077610c43b2fe59ad827cfec'

it('Axios is not being called correctly', ()=> {
  const fakeAxiosCall = false
  const fakeAxiosGet = (url) => {
    expect(url).toBe('https://api.themoviedb.org/3/discover/movie', {
     FakeAxiosCall = true
    })
  }
  getMovies({
    params:{
      'apikey': tmdbAPI
    }
  }).then(res => {
    expect(FakeAxiosCall).toBe(true)
  })
})



