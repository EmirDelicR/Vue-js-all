<template>
  <div class="task">
    <div class="left">
      <div class="checkbox">
        <input
          type="checkbox"
          name="task"
          v-on:click="$parent.toggleDone($event, task.id)"
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
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

