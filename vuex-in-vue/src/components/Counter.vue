<template>
  <div>
    <button @click="inc">Increment</button>
    <button @click="dec(100)">Decrement</button>
    <button @click="asyncInc({by:50, duration:2000})">Async Increment</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Counter',
  computed: {
    counter () {
      return this.$store.state.counter;
    }
  },
  methods: {
    ...mapActions({
      inc: 'increment',
      dec: 'decrement',
      asyncInc: 'asyncIncrement'
    }),
    myMethods () {

    }

  }
}
</script>

<style scoped>
</style>
