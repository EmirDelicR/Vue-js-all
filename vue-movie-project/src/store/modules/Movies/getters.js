export default {
  getMovies(state) {
    return state.movies
  },

  getFilteredMovies(state, getters) {
    const filters = getters.getFilters

    if (!filters.length) {
      return state.movies
    }

    let movies = state.movies.filter(movie => {
      let movieGenres = movie.Genre.split(', ')
      let matched = true
      filters.forEach(filter => {
        if (movieGenres.indexOf(filter.name) === -1) {
          matched = false
        }
      })
      if (matched) {
        return movie
      }
    })

    /*
    let movies = state.movies.filter(movie => {
      return filters.find(filter => {
        if (movie.Genre.includes(filter.name)) {
          return movie
        }
      })
    })
    */

    return movies
  },
}
