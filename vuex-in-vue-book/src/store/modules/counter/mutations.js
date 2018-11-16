import * as types from './count-types'
const mutations = {
  [types.INCREMENT]: (state, payload) => {
    console.log(payload)
    state.count += payload
  },
  [types.DECREMENT]: state => {
    state.count--
  },
  [types.RESET]: state => {
    state.count = 0
  },
}

export default mutations
