<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        {{ message | reverse }}
        <hr />
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        {{ message | count }}
        <hr />
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        {{ newmsg | reverse | count }}
        <hr />
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        {{ countMixin }}
      </div>
    </div>
  </div>
</template>

<script>
import { countMixin } from '../countMixin.js'
export default {
  name: 'Filters',
  mixins: [countMixin],
  data () {
    return {
      message: "This is Sparta!"
    }
  },
  filters: {
    reverse (str) {
      if (!str) return '';
      str = str.toString();
      return str.split("").reverse().join("");
    }
  },
  computed: {
    newmsg () {
      return this.message;
    }
  }
}
</script>

<style scoped>
</style>
