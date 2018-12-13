<template>
  <div class="header">
    <nav>
      <ul>
        <li @click="selected(0)">{{ currentDate | moment('ddd DD/MM') }}</li>
        <li @click="selected(1)">{{ currentDate | moment('add', '1 days', 'ddd DD/MM') }}</li>
        <li @click="selected(2)">{{ currentDate | moment('add', '2 days', 'ddd DD/MM') }}</li>
        <li @click="selected(3)">{{ currentDate | moment('add', '3 days', 'ddd DD/MM') }}</li>
        <li @click="selected(4)">{{ currentDate | moment('add', '4 days', 'ddd DD/MM') }}</li>
        <li @click="selected(5)">{{ currentDate | moment('add', '5 days', 'ddd DD/MM') }}</li>
        <li @click="selected(6)">{{ currentDate | moment('add', '6 days', 'ddd DD/MM') }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MovieHeader',
  computed: {
    ...mapGetters({
      currentDate: 'getCurrentDay',
      getMovies: 'getMovies'
    }),
  },
  methods: {
    selected (day) {
      // TODO fix this
      const movies = this.getMovies;
      let current = this.currentDate;
      let filterMovies = movies.filter(element => {
        return element.sessions.filter(session => {
          let sessionDay = new Date(session.time);
          let currentDay = new Date(current);
          console.log('Session: ', sessionDay.getDay())
          console.log('Current: ', currentDay.getDay())
          if (sessionDay.getDay() == currentDay.getDay() + day) {
            return session
          }
        })
      });

      // console.log(filterMovies)
    }
  }
}
</script>

<style>
</style>
