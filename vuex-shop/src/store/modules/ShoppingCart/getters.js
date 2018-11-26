export default {
  cartProducts(state, getters, rootState) {
    return state.cart.map(cartItem => {
      const product = rootState.ProductList.products.find(
        product => product.id === cartItem.id,
      )
      return {
        name: product.title,
        price: product.price,
        quantity: cartItem.quantity,
      }
    })
  },

  getCartTotal(state, getters) {
    return getters.cartProducts.reduce((total, value) => {
      return total + value.price * value.quantity
    }, 0)
  },
}
