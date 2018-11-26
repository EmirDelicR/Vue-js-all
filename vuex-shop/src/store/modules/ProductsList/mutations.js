export default {
  // set and update the state
  setProducts(state, products) {
    state.products = products
  },

  decrementProductInventory(state, product) {
    product.inventory--
  },
}
