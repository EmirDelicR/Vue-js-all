import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    cart: [],
    checkoutStatus: null,
  },
  mutations,
  getters,
  actions,
}
