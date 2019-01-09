import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import data from '@/JSON/tasks.json'

export default {
  state: {
    tasks: data,
    task: {},
    message: '',
    action: 'create',
  },
  mutations,
  getters,
  actions,
}
