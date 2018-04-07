const getPotatoes = require('../getPotatoes/getPotatoes')

it.only('return potatoes', ()=>{
  return getPotatoes.then(res =>{
    expect(res).toBe('potatoes')
  })
})
