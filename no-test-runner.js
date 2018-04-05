const checkout = order => {
  return order.items.reduce(
    (prev, curr) => curr.price * (curr.quantity || 1) + prev,
    0
  ) // curr.quantity || 1 checks the quantity of item in cart. //try shipping next? 
}

if (
  checkout({
    items: [{ name: 'Mars', price: 2 }]
  }) !== 2
) {
  throw new Error('Check Fail with no Quantity')
}

if (
  checkout({
    items: [{ name: 'Snickers', price: 5 }, { name: 'Mars', price: 2 }]
  }) !== 7
) {
  throw new Error('Check Fail 2')
}

if (
  checkout({
    items: [{ name: 'Mr-Big', price: 3, quantity: 2 }]
  }) !== 6
) {
  throw new Error('Check Fail with Quantity')
}

const getImageSrc = gallery => {
  let src = gallery.data[0].src
  return src
}

if (
  getImageSrc({
    data: [{ name: 'doge', type: 'meme', src: 'doge.png' }]
  }) !== 'doge.png'
) {
  throw new Error('Check fail src')
}
