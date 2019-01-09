<template>
  <div class="todo-task">
    <div class="tasks-header">
      <span>&#9935;</span> In Progress Tasks ({{ getTodoTasks.length }})
    </div>
    <div
      v-for="task in getTodoTasks"
      :key="task.id"
    >
      <task :task='task' />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from './Task'
export default {
  components: {
    Task
  },
  computed: {
    ...mapGetters({
      getTodoTasks: 'getTodoTasks'
    }),
  },

  /*
  methods: {
    listTasks: function () {
      API_TASKS.listTasks().then(response => {
        app.tasks = response;
      });
    },
    clear: function () {
      this.task = {};
      this.action = 'create';
      this.message = '';
    },
    toggleDone: function (event, id) {
      event.stopImmediatePropagation();
      let task = this.tasks.find(item => item.id === id);
      if (task) {
        task.completed = !task.completed;
        API_TASKS.updateTask(task)
          .then(response => {
            app.listTasks();
            app.clear();
            let status = response.completed ? 'done' : 'in progress';
            app.message = `Task ${response.name} with id: ${response.id} is ${status}!`;
          });
      };
    },
    createTask: function (event) {
      (!this.task.completed) ? this.task.completed = false : this.task.completed = true;
      API_TASKS.createTask(this.task)
        .then(response => {
          app.listTasks();
          app.clear();
          app.message = `Task ${response.name} with id: ${response.id} is created!`;
        });
    },
    editTask: function (event, id) {
      this.action = 'edit';
      event.stopImmediatePropagation();
      let task = this.tasks.find(item => item.id === id);
      if (task) {
        this.task = {
          id: id,
          name: task.name,
          description: task.description,
          completed: task.completed
        };
      };
    },
    updateTask: function (event, id) {
      event.stopImmediatePropagation();
      API_TASKS.updateTask(this.task)
        .then(response => {
          app.listTasks();
          app.clear();
          app.message = `Task ${response.name} with id: ${response.id} is updated!`;
        });
    },
    deleteTask: function (event, id) {
      event.stopImmediatePropagation();
      API_TASKS.deleteTask(id)
        .then(response => {
          app.listTasks();
          app.clear();
          app.message = `Task with id: ${id} is deleted!`;
        });
    },
  },
  beforeMount () {
    this.listTasks()
  }
*/

}
</script>


