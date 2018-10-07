<template>
  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-nav-item class="navbar-brand" to="/">Stock Trader</b-nav-item>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/portfolio">Portfolio</b-nav-item>
        <b-nav-item to="/stocks">Stocks</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right @click="endDay">End of Day</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            Save & Load
          </template>
          <b-dropdown-item href="#">Save Data</b-dropdown-item>
          <b-dropdown-item href="#">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-text right><strong>Funds: {{ funds | currency }}</strong></b-nav-text>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  computed: {
    funds () {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay () {
      this.randomizeStocks();
    }
  }
}
</script>

<style scoped lang="scss">
</style>
