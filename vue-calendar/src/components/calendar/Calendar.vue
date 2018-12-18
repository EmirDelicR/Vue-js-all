<template>
  <div class="calendar-main">
    <div class="header">
      <div class="logo">
        <h1>Calendar</h1>
      </div>
      <div class="tool-bar">
        <calendar-month />
      </div>
    </div>

    <div class="day-bar">
      <div
        v-for="name in getDaysName"
        :key="name"
      > {{ name}}
      </div>
    </div>

    <div class="calendar">
      <div
        class="cl-week"
        v-for="(week, index) in weeks"
        :key="index"
      >
        <calendar-day
          v-for="(day, index) in week"
          :key="index"
          :day="day"
        />
      </div>
    </div>

    <calendar-event />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CalendarDay from './CalendarDay.vue'
import CalendarMonth from './CalendarMonth.vue'
import CalendarEvent from './CalendarEvent.vue'
import { generateDays, generateWeeks } from '@/utilities/calendar.js'

export default {
  name: 'Calendar',
  components: {
    CalendarDay,
    CalendarMonth,
    CalendarEvent
  },
  computed: {
    ...mapGetters({
      getMonth: 'getMonth',
      getYear: 'getYear',
      getDaysName: 'getDaysName'
    }),
    days () {
      let day = `${this.getYear}-${this.getMonth}-1`
      let currentDay = this.moment(day, 'YYYY-M-D')
      return generateDays(this, currentDay, day)
    },
    weeks () {
      return generateWeeks(this.days)
    },


  },
}
</script>
