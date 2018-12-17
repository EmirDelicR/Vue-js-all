<template>
  <div
    :class="{ 'calendar-event': true, active: eventStatus }"
    :style="{ top: positionY + 'px', left: positionX + 'px'}"
  >
    <h4>Add an Event</h4>
    <p>{{ formatEventDate }}</p>
    <div class="text">
      <input
        @keyup.enter="createDayEvent"
        v-focus
        type="text"
        v-model="description"
        placeholder="Add Event"
      />
    </div>

    <div class="buttons">
      <button
        :disabled="isDisabled"
        @click="createDayEvent"
      >Create</button>
    </div>

    <button
      class="close-btn"
      @click="closeEvent"
    >X</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "CalendarEvent",
  data () {
    return {
      description: '',
    }
  },
  computed: {
    ...mapGetters({
      positionX: 'getMousePositionX',
      positionY: 'getMousePositionY',
      eventStatus: 'getEventStatus',
      eventDate: 'getEventDate'
    }),
    isDisabled () {
      if (this.description) {
        return false;
      }
      return true
    },
    formatEventDate () {
      if (this.eventDate) {
        return this.moment(this.eventDate).format('dddd, MMM Do')
      }
      return this.moment().format('dddd, MMM Do')
    }
  },
  methods: {
    ...mapActions({
      closeEvent: 'closeEvent',
      createEvent: 'createEvent'
    }),
    createDayEvent () {
      this.createEvent(this.description)
      this.description = ''
    }
  }

}
</script>
