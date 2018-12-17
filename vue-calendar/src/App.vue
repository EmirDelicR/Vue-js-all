<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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
