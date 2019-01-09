<template>
  <div class="todo-wrapp">
    <task-header />
    <todo-tasks />
    <completed-tasks />
    <task-form />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoTasks from '@/components/todo/TodoTasks.vue'
import CompletedTasks from '@/components/todo/CompletedTasks.vue'
import TaskForm from '@/components/todo/TaskForm.vue'
import TaskHeader from '@/components/todo/TaskHeader.vue'

export default {
  components: {
    TodoTasks,
    CompletedTasks,
    TaskForm,
    TaskHeader,
  }
}
</script>
