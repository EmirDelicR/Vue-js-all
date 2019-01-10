export default {
  switchState({ commit, state }, id) {
    let task = state.tasks.find(item => item.id === id)
    if (task) {
      commit('updateTaskState', task)
    }
  },
  createTask({ commit, state }, task) {
    let max_id = state.tasks.reduce(
      (id, obj) => (id = id > obj.id ? id : obj.id),
      0,
    )
    task.id = parseInt(max_id) + 1
    commit('createTask', task)
    commit('clear')
  },

  clear({ commit }) {
    commit('clear')
  },

  deleteTask({ commit, state }, id) {
    let index = state.tasks.findIndex(obj => obj.id == id)
    commit('removeTask', index)
  },

  editTask({ commit, state }, id) {
    let task = state.tasks.find(item => item.id === id)
    commit('editTask', task)
  },

  updateTask({ commit, state }, task) {
    commit('updateTask', task)
    commit('clear')
  },
}
