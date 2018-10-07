import stocksInit from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RANDOM_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    // Using action from portfolio store
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocksInit);
  },
  randomizeStocks: ({ commit }) => {
    commit("RANDOM_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
