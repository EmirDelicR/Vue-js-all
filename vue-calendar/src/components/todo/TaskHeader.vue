<template>
  <div class="task-header">
    <h1>Menage TODO list for tasks <button @click="printTasks">&#128424;</button></h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      printTasks: 'printTasks'
    }),
  },
}
</script>
