export default {
  addFilter(state, filter) {
    if (filter.status) {
      state.movieFilters.push(filter)
    } else {
      const index = state.movieFilters.findIndex(
        item => item.name === filter.name,
      )
      state.movieFilters.splice(index, 1)
    }
  },
}
