<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import NavBar from '@/components/main/NavBar.vue'

export default {
  components: {
    NavBar
  },
  methods: {
    ...mapMutations({
      setCurrentMonth: 'setCurrentMonth',
      setCurrentYear: 'setCurrentYear'
    }),
  },
  created () {
    const month = this.moment().month() + 1
    const year = this.moment().year()
    this.setCurrentMonth(month)
    this.setCurrentYear(year)
  }
}
</script>


<style lang="scss" src="./assets/stylesheets/application.scss">
