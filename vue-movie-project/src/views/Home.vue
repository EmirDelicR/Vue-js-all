<template>
  <div class="main">
    <movie-header />
    <movie-list />
    <movie-filter />
    <div class="footer"> This is footer <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span> </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieHeader from '@/components/main/MovieHeader.vue'
import MovieList from '@/components/movie/MovieList.vue'
import MovieFilter from '@/components/filter/MovieFilter.vue'

export default {
  name: 'home',
  components: {
    MovieHeader,
    MovieList,
    MovieFilter
  }
}
</script>
