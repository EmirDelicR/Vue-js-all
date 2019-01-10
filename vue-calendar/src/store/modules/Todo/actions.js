export default {
  switchState({ commit, state }, id) {
    let task = state.tasks.find(item => item.id === id)
    if (task) {
      commit('updateTaskState', task)
    }
  },
}
