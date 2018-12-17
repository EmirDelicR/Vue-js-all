<template>
  <div class="calendar-main">
    <div class="header">
      <div>
        <h1>Calendar</h1>
      </div>
      <div>
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
      // TODO outsource this
      // Generating all days
      let days = [];
      let day = `${this.getYear}-${this.getMonth}-1`
      let currentDay = this.moment(day, 'YYYY-M-D')
      do {
        days.push(currentDay)
        currentDay = this.moment(currentDay).add(1, 'days')
      } while (currentDay.month() + 1 === this.getMonth)

      // Add previus days to start
      const MONDAY = 1
      currentDay = this.moment(days[0])

      if (currentDay.day() !== MONDAY) {
        do {
          currentDay = this.moment(currentDay).subtract(1, 'days')
          days.unshift(currentDay)
        } while (currentDay.day() !== MONDAY)
      }

      // Add next month days to end
      const SUNDAY = 0
      currentDay = this.moment(days[days.length - 1])

      if (currentDay.day() !== SUNDAY) {
        do {
          currentDay = this.moment(currentDay).add(1, 'days')
          days.push(currentDay)
        } while (currentDay.day() !== SUNDAY)
      }
      return days
    },

    weeks () {
      // TODO refactor this
      let weeks = [];
      let week = [];

      for (let day of this.days) {
        week.push(day);
        if (week.length === 7) {
          weeks.push(week);
          week = []
        }
      }

      return weeks;
    },


  },
}
</script>
