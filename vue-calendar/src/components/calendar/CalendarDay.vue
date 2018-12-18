<template>
  <div
    :class="dayClass"
    @click="showEvent(day.format())"
  >
    {{ day.format('D') }}
    <ul class="event-list">
      <li
        v-for="(event, index) in filteredEvents"
        :key="index"
      >{{event.description}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "CalendarDay",
  props: {
    day: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      events: 'getEvents',
      eventDate: 'getEventDate'
    }),
    dayClass () {
      let today = this.day.isSame(this.moment(), 'day')
      return {
        'cl-day': true,
        today,
        past: this.day.isSameOrBefore(this.moment(), 'day') && !today,
        active: this.moment(this.eventDate).isSame(this.day, 'day')
      }
    },
    filteredEvents () {
      return this.events.filter(event => {
        return this.moment(event.date, 'YYYY-MM-DD').isSame(this.day, 'day')
      })
    }
  },
  methods: {
    ...mapActions({
      showEvent: 'showEvent'
    })
  }

}
</script>
