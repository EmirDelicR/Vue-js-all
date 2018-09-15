<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Server Statuss: {{ status }}</p>
    <app-home/>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      status: 'Criticle'
    }
  },
  components: {
    'app-home': Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
