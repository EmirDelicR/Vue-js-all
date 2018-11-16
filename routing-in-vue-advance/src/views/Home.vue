<template>
  <div class="home">
    <h2>This is home page</h2>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log("Home rout test");
    next();
  }
}
</script>

<style scoped>
</style>
