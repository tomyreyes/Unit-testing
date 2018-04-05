const getOrderTotal = order => {
  return order.cart.reduce((prev, curr)=> curr.price * (curr.quantity || 1) + prev, 0 )
}

module.exports = getOrderTotal