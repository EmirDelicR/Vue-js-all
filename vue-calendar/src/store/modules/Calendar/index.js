import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    month: 12,
    year: 2018,
    daysNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  mutations,
  getters,
  actions,
}
