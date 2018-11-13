<template>
  <div class="about">
    <div class="side-bar">
      <h3>Side bar</h3>
      <router-link to="/about/first">First</router-link> <br />
      <router-link to="/about/second">Second</router-link> <br />
      <router-link to="/about/third/1">Third</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {

}
</script>

<style scoped>
.side-bar {
  width: 120px;
  height: 500px;
  border: 1px solid red;
  float: left;
}
.main {
  float: left;
  width: 820px;
  height: 500px;
  border: 1px solid red;
}
</style>
