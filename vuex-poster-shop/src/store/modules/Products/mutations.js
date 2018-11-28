export default {
  decrementProductInventory(state, product) {
    product.inventory--
  },

  incrementProductInventory(state, product) {
    product.inventory++
  },
}
