<template>
  <div>
    <h1>{{count}}</h1>
    <input type="number" v-model="amount">
    <button @click="increment(getAmount)">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">R</button>
    <button @click="myIncrement">MyInc</button>
  </div>
</template>
<script>
import * as fromCount from '../store/modules/counter/';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      amount: 0
    }
  },
  methods: {
    ...mapActions({
      increment: fromCount.INCREMENT,
      decrement: fromCount.DECREMENT,
      reset: fromCount.RESET
    }),
    myIncrement () {
      this.$store.dispatch(fromCount.INCREMENT, this.getAmount);
    }
  },
  computed: {
    ...mapGetters({
      count: fromCount.GET_COUNT
    }),
    getAmount () {
      return Number(this.amount) || 1;
    }
  },
}
</script>

<style scoped>
</style>
