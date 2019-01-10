export default {
  updateTaskState(state, task) {
    task.completed = !task.completed
    console.log(task)
  },

  createTask(state, task) {
    state.tasks.push(task)
  },

  clear(state) {
    state.task = {
      name: '',
      description: '',
      completed: false,
    }
    state.action = 'create'
  },

  removeTask(state, index) {
    state.tasks.splice(index, 1)
  },
}
