<template>
  <div class="search">
    <form @submit.prevent="searchProducts(searchValue)">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search..."
      >
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions({
      searchProducts: 'searchProducts'
    })
  }

}
</script>

<style>
</style>
