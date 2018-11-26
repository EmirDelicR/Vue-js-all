import shop from '@/api/shop'

export default {
  // = methods
  // make an AJAX call
  fetchProducts({ commit }) {
    // run mutation to update state
    return new Promise((resolve, reject) => {
      shop.getProducts(data => {
        commit('setProducts', data)
        resolve()
      })
    })
  },
}
