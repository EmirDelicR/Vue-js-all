import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    // store {id, quantity}
    cart: [],
    checkoutStatus: null,
  },
  mutations,
  getters,
  actions,
}
