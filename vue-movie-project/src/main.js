import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.directive('tooltip', {
  bind(el, bindings) {
    console.log(el)
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
