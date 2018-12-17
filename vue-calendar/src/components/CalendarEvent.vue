<template>
  <div
    :class="{ 'calendar-event': true, active: eventStatus }"
    :style="{ top: positionY + 'px', left: positionX + 'px'}"
  >
    <h4>Add an Event</h4>

    <div class="text">
      <input
        type="text"
        v-model="description"
      />
    </div>

    <div class="buttons">
      <button @click="createEvent">Create</button>
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
      description: ''
    }
  },
  computed: {
    ...mapGetters({
      positionX: 'getMousePositionX',
      positionY: 'getMousePositionY',
      eventStatus: 'getEventStatus'
    }),
  },
  methods: {
    ...mapActions({
      closeEvent: 'closeEvent',
      createEvent: 'createEvent'
    })
  }

}
</script>
