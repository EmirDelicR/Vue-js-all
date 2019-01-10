import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    auth: false,
    data: {
      username: '',
      password: '',
    },
  },
  mutations,
  getters,
  actions,
}
