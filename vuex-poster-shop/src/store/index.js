import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import ShoppingCart from './modules/ShoppingCart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Products,
    ShoppingCart,
  },
})
