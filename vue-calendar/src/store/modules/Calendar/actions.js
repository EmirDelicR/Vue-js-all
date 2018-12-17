import { constants } from '@/utilities/constants'

export default {
  incrementMonth({ commit, state }) {
    if (state.month < constants.MAX_MONTH_NUMBER) {
      commit('incrementMonth')
    } else {
      commit('incrementYear')
      commit('setCurrentMonth', constants.MIN_MONTH_NUMBER)
    }
  },

  decrementMonth({ commit, state }) {
    if (state.month > constants.MIN_MONTH_NUMBER) {
      commit('decrementMonth')
    } else {
      commit('decrementYear')
      commit('setCurrentMonth', constants.MAX_MONTH_NUMBER)
    }
  },

  showEvent({ commit }, payload) {
    const mouseCoordinates = {
      x: payload.clientX,
      y: payload.clientY,
    }
    commit('setMouseCoordinates', mouseCoordinates)
    commit('setEventStatus', true)
  },

  closeEvent({ commit }) {
    const mouseCoordinates = {
      x: 0,
      y: 0,
    }
    commit('setMouseCoordinates', mouseCoordinates)
    commit('setEventStatus', false)
  },

  createEvent({ commit, state }) {
    commit('setEvent')
  },
}
