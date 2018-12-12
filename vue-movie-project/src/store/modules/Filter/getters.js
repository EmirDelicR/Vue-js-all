import { deepCopy } from '@/utilities/copy'
export default {
  getGenres(state) {
    return state.genres
  },

  getFilters(state) {
    return state.movieFilters
  },

  getCurrentDay(state) {
    return state.day
  },
}
