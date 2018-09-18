<template>
  <div class="home">
    <app-counter></app-counter>
    <app-result></app-result>
    <hr/>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '../components/Counter';
import Result from '../components/Result';

export default {
  name: 'home',
  computed: {
    value: {
      get () {
        return this.$store.getters.value;
      },
      set (value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result
  }
}
</script>
