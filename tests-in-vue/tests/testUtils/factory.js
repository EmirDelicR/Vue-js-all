import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default (getters, actions) =>
  new Vuex.Store({
    modules: {
      Card: {
        namespaced: true,
        actions,
        getters: {
          projectId: () => getters.Card.projectId || null,
          currentTotal: () => getters.Card.currentTotal || null
        }
      }
    }
  });
