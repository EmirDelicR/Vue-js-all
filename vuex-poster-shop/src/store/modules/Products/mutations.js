export default {
  setProducts(state, products) {
    state.products = products
  },

  decrementProductInventory(state, product) {
    product.inventory--
  },

  incrementProductInventory(state, product) {
    product.inventory++
  },
}
