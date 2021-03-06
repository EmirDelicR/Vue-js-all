import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import Calendar from './modules/Calendar'
import Todo from './modules/Todo'
import Auth from './modules/Auth'
/** Set UTC timezone */
moment.tz.setDefault('UTC')
/** Set moment in Vue instance */
Vue.prototype.moment = moment

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moment,
  },
  modules: {
    Calendar,
    Todo,
    Auth,
  },
})
