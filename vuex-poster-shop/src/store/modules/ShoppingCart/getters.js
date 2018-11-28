export default {
  cartItems(state) {
    return state.cart
  },
  cartTotal(state) {
    return state.cart.reduce((total, value) => {
      return (total += value.price * value.quantity)
    }, 0)
  },
}
