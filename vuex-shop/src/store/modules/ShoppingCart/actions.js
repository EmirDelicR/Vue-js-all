import shop from '@/api/shop'
export default {
  addProductToCart({ commit, state, getters }, product) {
    if (!getters.productIsInStock(product)) {
      return
    }
    const cartItem = state.cart.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', { id: product.id })
    } else {
      commit('incrementItemQuantity', cartItem)
    }
    commit('decrementProductInventory', product)
  },

  checkout({ commit, state }) {
    shop.buyProducts(
      state.cart,
      () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      },
      () => {
        commit('setCheckoutStatus', 'fail')
      },
    )
  },
}
