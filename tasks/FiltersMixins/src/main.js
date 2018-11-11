import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('count', str => {
  if (!str) return ' (0)'
  str = str.toString()
  return str + ' (' + str.length + ')'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
