export default {
  updateTaskState(state, task) {
    task.completed = !task.completed
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

  editTask(state, task) {
    state.task = { ...task }
    state.action = 'edit'
  },

  updateTask(state, task_new) {
    let index = state.tasks.findIndex(obj => obj.id == task_new.id)
    state.tasks.splice(index, 1)
    state.tasks.push(task_new)
  },
}
