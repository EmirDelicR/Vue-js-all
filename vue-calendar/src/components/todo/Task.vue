<template>
  <div class="task">
    <div class="left">
      <div class="checkbox">
        <input
          type="checkbox"
          name="task"
          @click.prevent="switchState(task.id)"
          :checked="task.completed"
        >
        <label>{{ task.name }}<span class="description"> {{ task.description }}</span></label>
      </div>
    </div>
    <div class="right">
      <span
        class="pencil"
        @click.prevent="editTask(task.id)"
      >&#x270E;</span>
      <span
        class="trash"
        @click.prevent="deleteTask(task.id)"
      > &#x1F5D1;</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      switchState: 'switchState',
      deleteTask: 'deleteTask',
      editTask: 'editTask'
    }),
  },
}
</script>

