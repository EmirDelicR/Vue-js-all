<template>
  <div class="movie-detail">
    <div class="poster">
      <img
        :src="movieById.Poster"
        :alt="movieById.Title"
      >
    </div>
    <div class="content">
      <h2>{{ movieById.Title}}</h2>
      <p>Year: {{ movieById.Year}}</p>
      <p>Released: {{ movieById.Released}}</p>
      <p>Runtime: {{movieById.Runtime}}</p>
      <p>Director: {{movieById.Director}}</p>
      <p>Actors: {{movieById.Actors}}</p>
      <p>Awards: {{movieById.Awards}}</p>
      <h2>Rating</h2>
      <p
        v-for="rate in movieById.Ratings"
        :key="rate.Source"
      >{{rate.Source}} - {{rate.Value}} </p>
      <p>IMBD rate: {{ movieById.imdbRating }}</p>
      <br />
      <a
        :href="movieById.Website"
        target='_blank'
      >Website</a>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  computed: {
    ...mapGetters({
      moviesData: 'getMovies',
    }),
    movieById () {
      let movie = this.moviesData.filter(movie => movie.imdbID == this.id)
      return movie[0] ? movie[0] : null

    }
  }

}
</script>

<style>
</style>
