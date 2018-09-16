import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("toLowercase", value => value.toLowerCase());

Vue.mixin({
  created() {
    console.log("Global");
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
