const getOrderTotal = require('../getOrderTotal')

it('Pricing error', ()=> {
  expect(getOrderTotal({
    cart:[{name:'Settlers of Catan', price: 66}]
  })).toBe(66)
})

it('Two items error', ()=> {
  expect(getOrderTotal({
    cart:[{name:'Settlers of Catan', price: 68}, 
          {name: 'Codenames', price: 25}]
  })).toBe(93)
})

it('Quantity error', ()=> {
  expect(getOrderTotal({
    cart:[{name:'Settlers of Catan', price: 68, quantity: 2}]
  })).toBe(136)
})

it('Two items, Quantity and price error', ()=>{
  expect(getOrderTotal({
    cart:[{name: 'Settlers of Catan', price: 68, quantity: 1 },
          {name: 'Codenames', price: 25, quantity: 2}]
  })).toBe(118)
})

