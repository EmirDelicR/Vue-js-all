import { deepCopy } from '@/utilities/copy'
export default {
  productItems(state) {
    return state.products
  },

  productIsInStock() {
    return product => {
      return product.inventory > 0
    }
  },

  productCount(state) {
    return state.products.length
  },

  loaderState(state) {
    return state.loader
  },

  productPageNumber(state) {
    return state.productPageNumber
  },

  pageSize(state) {
    return state.pageSize
  },

  pageCount(state, getters) {
    let numberOfProducts = getters.productCount
    return Math.floor(numberOfProducts / getters.pageSize)
  },

  paginatedData(state, getters) {
    const start = getters.productPageNumber * getters.pageSize,
      end = start + getters.pageSize
    let copyData = deepCopy(getters.productItems)
    return copyData.slice(start, end)
  },
}
