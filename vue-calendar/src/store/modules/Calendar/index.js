import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    month: 1,
    year: 2018,
    mousePositionX: 0,
    mousePositionY: 0,
    eventStatus: false,
    eventDate: null,
    events: [
      {
        description: 'RR event',
        date: '2018-12-13',
      },
      { description: 'SS event', date: '2018-12-14' },
      { description: 'SS event', date: '2018-12-15' },
    ],
  },
  mutations,
  getters,
  actions,
}
