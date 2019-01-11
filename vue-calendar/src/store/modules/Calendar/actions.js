import { constants } from '@/utilities/constants'
import ls from '@/utilities/localStorage'

export default {
  incrementMonth({ commit, state, dispatch }) {
    dispatch('closeEvent')
    if (state.month < constants.MAX_MONTH_NUMBER) {
      commit('incrementMonth')
    } else {
      commit('incrementYear')
      commit('setCurrentMonth', constants.MIN_MONTH_NUMBER)
    }
  },

  decrementMonth({ commit, state, dispatch }) {
    dispatch('closeEvent')
    if (state.month > constants.MIN_MONTH_NUMBER) {
      commit('decrementMonth')
    } else {
      commit('decrementYear')
      commit('setCurrentMonth', constants.MAX_MONTH_NUMBER)
    }
  },

  showEvent({ commit }, payload) {
    const mouseCoordinates = {
      x: event.clientX,
      y: event.clientY,
    }
    commit('setMouseCoordinates', mouseCoordinates)
    commit('setEventStatus', true)
    commit('setEventDate', payload)
  },

  closeEvent({ commit }) {
    const mouseCoordinates = {
      x: 0,
      y: 0,
    }
    commit('setMouseCoordinates', mouseCoordinates)
    commit('setEventStatus', false)
    commit('setEventDate', null)
  },

  createEvent({ commit, state, dispatch }, payload) {
    const obj = {
      description: payload,
      date: state.eventDate,
    }
    commit('setEvent', obj)
    dispatch('closeEvent')
  },

  printData({ state }) {
    const data = ls.getItem('events')
    console.log(data)
  },
}
