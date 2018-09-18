import Vue from "vue";
import Vuex from "vuex";
import counters from "./modules/counter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    updateValue: ({ commit }, payload) => {
      commit("updateValue", payload);
    }
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  modules: {
    counters
  }
});
