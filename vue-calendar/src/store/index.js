import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import Calendar from './modules/Calendar'
/** Set UTC timezone */
moment.tz.setDefault('UTC')
/** Set moment in Vue instance */
Vue.prototype.moment = moment

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moment,
  },
  mutations: {},
  actions: {},
  modules: {
    Calendar,
  },
})
