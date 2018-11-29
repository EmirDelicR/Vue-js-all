import shop from '@/api/shop'

export default {
  addProductToCart({ commit, state, rootState }, product) {
    let cartItem = state.cart.find(item => item.id === product.id)
    let productItem = rootState.Products.products.find(
      item => item.id === product.id,
    )
    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('incrementCartItemQuantity', cartItem)
    }
    commit('decrementProductInventory', productItem)
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

  checkout({ commit, state }) {
    shop.buyProducts(
      () => {
        commit('setCheckoutStatus', 'Checkout is success. Buy again :)')
        setTimeout(() => {
          commit('emptyCart')
          commit('setCheckoutStatus', null)
        }, 2000)
      },
      () => {
        commit('setCheckoutStatus', 'Sorry there is problem! Try again :)')
      },
    )
  },
}
