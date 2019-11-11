<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Card
  }
};
</script>
