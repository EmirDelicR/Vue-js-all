<template>
  <div class="completed-task">
    <div class="tasks-header">
      <span>&#9969;</span> Completed Tasks ({{ getCompletedTasks.length }})
    </div>
    <div
      v-for="task in getCompletedTasks"
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
      getCompletedTasks: 'getCompletedTasks'
    }),
  },
}
</script>


