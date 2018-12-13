<template>
  <div :class="dayClass">{{ day.format('D') }}</div>
</template>

<script>
export default {
  name: "CalendarDay",
  props: {
    day: {
      type: Object
    }
  },
  computed: {
    dayClass () {
      let today = this.day.isSame(this.moment(), 'day')
      return {
        'cl-day': true,
        today,
        past: this.day.isSameOrBefore(this.moment(), 'day') && !today
      }
    }
  }

}
</script>
