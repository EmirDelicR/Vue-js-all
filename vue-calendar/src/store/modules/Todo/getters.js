export default {
  getTasks(state) {
    return state.tasks
  },
  getTask(state) {
    return state.task
  },
  getCompletedTasks(state) {
    return state.tasks.filter(item => item.completed === true)
  },
  getTodoTasks(state) {
    return state.tasks.filter(item => item.completed === false)
  },
  getAction(state) {
    return state.action
  },
}
