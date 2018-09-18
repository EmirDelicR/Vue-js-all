import * as types from "../types";
const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " Clicks";
  }
};

const mutations = {
  increment: (state, num) => {
    state.counter += num || 1;
  },
  decrement: (state, number) => {
    state.counter -= number;
  }
};

const actions = {
  increment: context => {
    context.commit("increment");
  },
  decrement: ({ commit }, number) => {
    commit("decrement", number);
  },
  asyncIncrement: ({ commit }, obj) => {
    setTimeout(() => {
      commit("increment", obj.by);
    }, obj.duration);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
