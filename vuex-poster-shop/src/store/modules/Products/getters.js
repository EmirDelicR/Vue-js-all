export default {
  productItems(state) {
    return state.products
  },

  productIsInStock() {
    return product => {
      return product.inventory > 0
    }
  },
}
