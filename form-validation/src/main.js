import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

//TODO remove ; so this can work
//axios.defaults.baseURL = process.env.VUE_APP_DATA_BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
