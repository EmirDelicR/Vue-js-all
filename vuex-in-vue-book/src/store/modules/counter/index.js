import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export const countStore = {
  state: {
    count: 0,
  },
  actions,
  getters,
  mutations,
}
export * from './count-types'
