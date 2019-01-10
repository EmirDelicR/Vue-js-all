<template>
  <div>
    <form
      class="login"
      @submit.prevent="loginUser(getUserData)"
    >
      <h1>Sign in</h1>
      <label>User name</label>
      <input
        required
        v-model="getUserData.username"
        type="text"
        placeholder="Snoopy"
      />
      <label>Password</label>
      <input
        required
        v-model="getUserData.password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
    <p v-if="isAuthenticated">&#x270C;</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getUserData: 'getUserData',
      isAuthenticated: 'isAuthenticated'
    }),
  },
  methods: {
    ...mapActions({
      loginUser: 'loginUser'
    })
  },
}
</script>

<style>
</style>
