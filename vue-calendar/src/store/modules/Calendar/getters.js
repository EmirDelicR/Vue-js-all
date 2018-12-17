import { constants } from '@/utilities/constants'

export default {
  getMonth(state) {
    return state.month
  },

  getYear(state) {
    return state.year
  },

  getDaysName(state) {
    return constants.DAY_NAMES
  },

  getMousePositionX(state) {
    return state.mousePositionX
  },

  getMousePositionY(state) {
    return state.mousePositionY
  },

  getEventStatus(state) {
    return state.eventStatus
  },

  getEvents(state) {
    return state.events
  },
}
