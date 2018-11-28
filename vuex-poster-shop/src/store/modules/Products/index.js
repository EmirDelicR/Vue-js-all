import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state: {
    products: [
      { id: 1, title: 'ProductTitle', price: '9.99', inventory: 10 },
      { id: 2, title: 'ProductTitle-2', price: '7.99', inventory: 5 },
    ],
  },
  mutations,
  getters,
  actions,
}
