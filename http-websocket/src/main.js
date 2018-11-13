import Vue from 'vue'
import App from './App.vue'
import SocketIo from 'socket.io-client'
import VueSocketIo from 'vue-socket.io'

Vue.config.productionTip = false
// Use port that is set in server.js file
export const Socket = SocketIo(`http://localhost:3001`)
Vue.use(VueSocketIo, Socket)

new Vue({
  render: h => h(App),
}).$mount('#app')
