<template>
  <div>
    <p>Data page</p>
  </div>
</template>

<script>
export default {
  name: "about-data",
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter TO: ", to);
    console.log("beforeRouteEnter FROM: ", from);
    console.log("beforeRouteEnter TO.param: ", to.params);

    next();
  }
};
</script>
