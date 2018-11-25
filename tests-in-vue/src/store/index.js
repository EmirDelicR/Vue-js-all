import Vue from 'vue'
import Vuex from 'vuex'

import Card from './Card'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Card,
  },
})
