import Vue from 'vue'
import Vuex from 'vuex'
import ProductList from './modules/ProductsList'
import ShoppingCart from './modules/ShoppingCart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProductList,
    ShoppingCart,
  },
})
