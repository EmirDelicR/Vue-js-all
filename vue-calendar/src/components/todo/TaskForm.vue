<template>
  <div class="add-task">

    <div class="form-header">
      <h1>Create new task</h1>
    </div>
    <form class="task-form">
      <div class="field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required="true"
        />
      </div>
      <div class="field">
        <input
          type="text"
          name="description"
          placeholder="Description"
          required="true"
        />
      </div>
      <div class="field">
        <label>Completed: </label>
        <input
          type="checkbox"
          name="completed"
        />
      </div>
      <button class="button">
        Submit
      </button>
      <button
        class="button"
        v-on:click="clear"
      >
        Clear
      </button>
    </form>
  </div>
</template>