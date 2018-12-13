import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { genres } from '@/utilities/genres'

export default {
  state: {
    genres,
    movieFilters: [],
    day: '2017-04-04',
  },
  mutations,
  getters,
  actions,
}
