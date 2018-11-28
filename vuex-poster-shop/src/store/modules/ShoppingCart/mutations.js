export default {
  pushProductToCart(state, product) {
    state.cart.push({
      title: product.title,
      id: product.id,
      price: product.price,
      quantity: 1,
    })
  },

  incrementCartItemQuantity(state, cartItem) {
    cartItem.quantity++
  },

  decrementCartItemQuantity(state, cartItem) {
    cartItem.quantity--
  },

  removeItemFromCart(state, index) {
    state.cart.splice(index, 1)
  },

  emptyCart(state) {
    state.cart = []
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
}
