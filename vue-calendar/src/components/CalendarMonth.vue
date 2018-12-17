<template>
  <div class="cl-month">
    <div>{{ formatedDate }}</div>
    <button @click="decrementMonth">-</button>
    <button @click="incrementMonth">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "CalendarMonth",
  methods: {
    ...mapActions({
      decrementMonth: 'decrementMonth',
      incrementMonth: 'incrementMonth'
    }),
  },
  computed: {
    ...mapGetters({
      getMonth: 'getMonth',
      getYear: 'getYear',
    }),
    formatedDate () {
      let day = `${this.getYear}-${this.getMonth}`
      return this.moment(day, 'YYYY-M').format('MMMM YYYY')
    }
  }

}
</script>
