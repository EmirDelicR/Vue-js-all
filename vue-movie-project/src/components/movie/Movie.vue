<template>
  <div class="movie-section">
    <div class="movie-item">
      <div class="poster">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
        >
      </div>
      <div class="content">
        <h2>{{ movie.Title}} <span>{{ movie.Rated }}</span></h2>
        <div class="sessions">
          <span
            class="time"
            v-for="sessions in filteredSessions"
            :key="sessions.id"
          >
            {{ sessions.time | moment("h:mm A")}}
            <span class="tooltip">Seats: {{ sessions.seats }}</span>
          </span>
        </div>

        <router-link :to="{name: 'movie', params:{ id: movie.imdbID } }">Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      currentDay: 'getCurrentDay',
    }),
    filteredSessions () {
      return this.movie.sessions.filter(session => {
        let sessionDay = new Date(session.time);
        let currentDay = new Date(this.currentDay);
        if (sessionDay.getDay() == currentDay.getDay()) {
          return session
        }

      })
    }
  },
  /* methods: {
     filteredSessions (sessions) {
       return sessions.filter(session => {
         let sessionDay = new Date(session.time);
         let currentDay = new Date(this.currentDay);
         if (sessionDay.getDay() == currentDay.getDay()) {
           return session
         }
 
       })
     }
   } */
}
</script>

<style scoped lang="scss">
</style>
