import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import data from '@/JSON/calendar.json'

export default {
  state: {
    month: 1,
    year: 2018,
    mousePositionX: 0,
    mousePositionY: 0,
    eventStatus: false,
    eventDate: null,
    events: data,
  },
  mutations,
  getters,
  actions,
}
