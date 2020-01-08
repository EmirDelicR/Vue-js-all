<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="switchRoute($event, 'about-data')">Switch Route</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchRoute(event, routeName) {
      console.log("Function Event: ", event);
      console.log("Function param: ", routeName);

      this.$router.push({ name: routeName, params: { userId: "123" } });
    }
  }
};
</script>
