<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <br />
      <br />
      <router-link to="/user/1">User One</router-link>|
      <router-link to="/user/2">User Two</router-link>
      <br />
      <br />
      <router-link to="/settings">Settings</router-link>
      <br />
      <br />
      <router-link to="/navigation">Navigation</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("This is full router: ", this.$router);
    console.log("This is current route: ", this.$route);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-active {
  color: #428db9;
}
</style>
