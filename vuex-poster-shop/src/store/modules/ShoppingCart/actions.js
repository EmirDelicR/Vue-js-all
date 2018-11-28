export default {
  addProductToCart({ commit, state }, product) {
    let cartItem = state.cart.find(item => item.id === product.id)

    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('incrementCartItemQuantity', cartItem)
    }
    commit('decrementProductInventory', product)
  },

  removeProductFromCart({ commit, state, getters, rootState }, cartItem) {
    commit('decrementCartItemQuantity', cartItem)

    let product = rootState.Products.products.find(
      item => item.id === cartItem.id,
    )

    commit('incrementProductInventory', product)

    if (cartItem.quantity === 0) {
      let index = state.cart.findIndex(x => x.id == cartItem.id)
      commit('removeItemFromCart', index)
    }
  },
}
