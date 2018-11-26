export default {
  // = computed properties
  productsCount(state) {
    return state.products.length
  },

  availableProducts(state) {
    // return state.products.filter(product => product.inventory > 0)
    return state.products
  },

  productIsInStock() {
    return product => {
      return product.inventory > 0
    }
  },
}
