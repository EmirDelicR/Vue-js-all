<template>
  <div class="movies-filter-section">
    <h2>Filter movies</h2>
    <div
      class="filter-list"
      v-for="genre in genres"
      :key="genre"
    >
      <filter-checkbox :filter="genre" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterCheckbox from './FilterCheckbox'

export default {
  name: 'MovieFilter',
  components: {
    FilterCheckbox
  },
  computed: {
    ...mapGetters({
      genres: 'getGenres'
    }),
  }
}
</script>

<style scoped lang="scss">
</style>
