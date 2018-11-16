import Vue from 'vue'
import Vuex from 'vuex'
import { countStore } from './modules/counter/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    countStore,
  },
})
