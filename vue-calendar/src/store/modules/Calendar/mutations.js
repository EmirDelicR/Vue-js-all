export default {
  setCurrentMonth(state, payload) {
    state.month = payload
  },

  setCurrentYear(state, payload) {
    state.year = payload
  },

  incrementMonth(state) {
    state.month++
  },

  decrementMonth(state) {
    state.month--
  },

  incrementYear(state) {
    state.year++
  },

  decrementYear(state) {
    state.year--
  },

  setMouseCoordinates(state, payload) {
    state.mousePositionX = payload.x
    state.mousePositionY = payload.y
  },

  setEventStatus(state, payload) {
    state.eventStatus = payload
  },

  setEvent(state, payload) {
    state.events.push(payload)
  },
}
