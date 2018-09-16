import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Dont use this
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
