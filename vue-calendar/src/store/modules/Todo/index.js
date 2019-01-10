import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import data from '@/JSON/tasks.json'

export default {
  state: {
    tasks: data,
    action: 'create',
    task: {
      id: null,
      name: '',
      description: '',
      completed: false,
    },
  },
  mutations,
  getters,
  actions,
}
