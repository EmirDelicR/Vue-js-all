<template>
  <div class="add-task">

    <div class="form-header">
      <h1>Create new task </h1>
    </div>
    <form
      class="task-form"
      @submit.prevent="(getAction == 'create') ? createTask(getTask) : updateTask(getTask)"
    >
      <div class="field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required="true"
          v-model="getTask.name"
        />
      </div>
      <div class="field">
        <input
          type="text"
          name="description"
          placeholder="Description"
          required="true"
          v-model="getTask.description"
        />
      </div>
      <div class="field">
        <label>Completed: </label>
        <input
          type="checkbox"
          name="completed"
          v-model="getTask.completed"
        />
      </div>
      <button class="button">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions({
      createTask: 'createTask',
      updateTask: 'updateTask',
      clear: 'clear'
    }),
  },
  computed: {
    ...mapGetters({
      getAction: 'getAction',
      getTask: 'getTask'
    }),
  },
}
</script>
