import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const defaultState = {
  currentTotal: 0,
  projectId: null,
}

export default {
  namespaced: true,
  state: defaultState,
  actions,
  getters,
  mutations,
}
