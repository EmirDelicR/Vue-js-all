<template>
  <div class="main-nav">
    <ul>
      <router-link
        tag="li"
        to="/"
        exact
      >Home</router-link>
      <router-link
        v-if="isAuthenticated"
        tag="li"
        to="/todo"
      >Todo</router-link>
      <router-link
        v-if="isAuthenticated"
        tag="li"
        to="/calendar"
      >Calendar</router-link>
      <router-link
        v-if="!isAuthenticated"
        tag="li"
        to="/login"
      >Login</router-link>
      <router-link
        tag="li"
        to="/login"
        v-else
        @click.native="logoutUser"
      >Logout</router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions({
      logoutUser: 'logoutUser'
    })
  },
}
</script>
