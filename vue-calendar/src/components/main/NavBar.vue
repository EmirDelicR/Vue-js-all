<template>
  <div class="main-nav">
    <ul>
      <router-link
        tag="li"
        to="/"
        exact
      >Home</router-link>
      <router-link
        tag="li"
        to="/about"
      >About</router-link>
      <router-link
        tag="li"
        to="/calendar"
      >Calendar</router-link>
      <router-link
        tag="li"
        to="/login"
      >Login</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
