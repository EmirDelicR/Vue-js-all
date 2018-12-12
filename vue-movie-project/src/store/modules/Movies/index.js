import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import data from '@/utilities/movies.json'

export default {
  state: {
    movies: data,
  },
  mutations,
  getters,
  actions,
}
