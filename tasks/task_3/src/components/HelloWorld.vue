<template>
  <div id="exercise">
    <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
    <div>
      <p>Current Value: {{ value }}</p>
      <button @click="value += 5">Add 5</button>
      <button @click="value += 1">Add 1</button>
      <p>{{ result }}</p>
    </div>
    <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
    <div>
      <input type="text" @input="reset" placeholder="Input reset to RESET">
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: 0
    }
  },
  methods: {
    reset ({ target }) {
      if (target.value === 'reset') {
        this.value = 0;
      }
    }
  },
  computed: {
    result () {
      return this.value !== 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    result () {
      setTimeout(() => {
        this.value = 0;
      }, 3000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
