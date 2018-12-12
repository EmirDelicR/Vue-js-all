<template>
  <div class="movies-section">
    <div v-if="moviesData.length === 0">
      No movies with that <span
        v-for="filter in filters"
        :key="filter.name"
      >{{ filter.name }} </span>
    </div>
    <div
      v-else
      class="movies-list"
      v-for="movie in moviesData"
      :key="movie.id"
    >
      <movie :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Movie from './Movie'

export default {
  name: 'MovieList',
  components: {
    Movie
  },
  computed: {
    ...mapGetters({
      moviesData: 'getFilteredMovies',
      filters: 'getFilters'
    }),
  }
}
</script>

<style scoped lang="scss">
</style>
