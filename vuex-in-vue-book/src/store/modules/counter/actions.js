import * as types from './count-types'

const actions = {
  [types.INCREMENT]: ({ commit }, payload) => {
    commit(types.INCREMENT, payload)
  },
  [types.DECREMENT]: ({ commit }) => {
    commit(types.DECREMENT)
  },
  [types.RESET]: ({ commit }) => {
    commit(types.RESET)
  },
}

export default actions
