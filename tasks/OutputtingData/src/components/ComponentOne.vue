<template>
  <div>
    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>{{ age * 3}}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>Random Number Computed: {{ randNumComputed }}</p>
    <p>Random Number Method: {{ randNumMethod() }}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
      <img style="width:100px;height:100px" src="@/assets/logo.png">
    </div>
    <div>
      <img style="width:100px;height:100px" :src="link">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
      <input :value="name" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentOne',
  data () {
    return {
      name: 'Emir Delic',
      age: 31,
      link: 'URL_TO_IMGAGE'
    }
  },
  methods: {
    randNumMethod () {
      return Math.random()
    }
  },
  computed: {
    randNumComputed () {
      return Math.random()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
