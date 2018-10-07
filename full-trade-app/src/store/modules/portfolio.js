const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, order) {
    const record = state.stocks.find(element => element.id == order.stockId);
    if (record) {
      record.quantity += order.quantity;
    } else {
      state.stocks.push({
        id: order.stockId,
        quantity: order.quantity
      });
    }
    state.funds -= order.stockPrice * order.quantity;
  },
  SELL_STOCK(state, order) {
    const record = state.stocks.find(element => element.id == order.stockId);
    if (record.quantity >= order.quantity) {
      record.quantity -= order.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += order.stockPrice * order.quantity;
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(elem => elem.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: state => {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
