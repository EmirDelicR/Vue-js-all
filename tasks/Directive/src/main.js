import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Register a global custom directive called `v-myOn`
Vue.directive('myOn', {
  // When the bound element is inserted into the DOM...
  bind(el, binding) {
    // Focus the element
    el.on()
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
