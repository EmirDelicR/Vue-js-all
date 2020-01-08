<template>
  <div>
    <p>{{ $route.params.id }}</p>
    <router-link :to="{ name: 'profile'}">Profile</router-link>|
    <router-link :to="{ name: 'post'}">Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {},
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("Watch TO: ", to);
      console.log("Watch FROM: ", from);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter TO: ", to);
    console.log("beforeRouteEnter FROM: ", from);

    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate TO: ", to);
    console.log("beforeRouteUpdate FROM: ", from);

    next();
  }
};
</script>

<style>
</style>