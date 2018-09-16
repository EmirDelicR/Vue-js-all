<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters</h1>
        <p> {{ text | toUppercase }} </p>
        <p> {{ text | toLowercase }} </p>
        <hr/>
        <input v-model="filterText">
        <ul>
          <li v-for="(item, index) in filteredFruits" :key="index">{{ item }}</li>
        </ul>
        <hr/>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List';
import { fruitMixin } from './fruitMixin.js';
export default {
  name: 'app',
  data () {
    return {
      text: 'Hello there!',
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin],
  created () {
    console.log("App component");
  }
}
</script>

<style>
</style>
