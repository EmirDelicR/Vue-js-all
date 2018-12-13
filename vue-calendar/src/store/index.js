import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
/** Set UTC timezone */
moment.tz.setDefault('UTC')
/** Set moment in Vue instance */
Vue.prototype.moment = moment

// import Movies from './modules/Movies'
// import Filter from './modules/Filter'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moment,
  },
  mutations: {},
  actions: {},
  modules: {
    //  Movies,
    //  Filter,
  },
})
