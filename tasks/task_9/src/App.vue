<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Directive msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Directive from './components/Directive.vue'

export default {
  name: 'app',
  components: {
    Directive
  }
}
</script>

<style>
</style>
