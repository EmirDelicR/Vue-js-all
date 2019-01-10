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
        v-on:click="$parent.editTask($event, task.id)"
      >&#x270E;</span>
      <span
        class="trash"
        v-on:click="$parent.deleteTask($event, task.id)"
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
      switchState: 'switchState'
    }),
  },
}
</script>

