import * as types from './count-types'
const getters = {
  [types.GET_COUNT]: state => {
    return state.count
  },
}

export default getters
