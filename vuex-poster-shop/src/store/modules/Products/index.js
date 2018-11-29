import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    products: [],
    loader: false,
    productPageNumber: 0,
    pageSize: 5,
  },
  mutations,
  getters,
  actions,
}
