<template>
  <div class="container">
    <h1>Directives Exercise</h1>
    <!-- Exercise -->
    <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
    <button v-myOn:click="someFun">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'Directive',
  directives: {
    myOn: {
      // directive definition
      bind (el, binding) {
        const event = binding.arg ? binding.arg : 'click';
        el.addEventListener(event, binding.value);
      }
    }
  },
  methods: {
    someFun () {
      console.log("This is test!")
    }
  }
}
</script>

<style scoped>
</style>
