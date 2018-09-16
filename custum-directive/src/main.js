import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("changecolor", {
  bind(el, binding, vnode) {
    // value
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    // modifiers
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      // arguments
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
