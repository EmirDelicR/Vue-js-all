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
    <div
      v-if="loaderState"
      class="message"
    >
      <p>Loading...</p>
    </div>
    <div
      v-else-if="productCount"
      class="message"
    >
      <p>Found
        <span>{{ productCount }}</span>
        results for search term
        <span>{{ searchValue }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      searchValue: '',
    }
  },
  methods: {
    ...mapActions({
      searchProducts: 'searchProducts',
    }),
  },
  computed: {
    ...mapGetters({
      productCount: 'productCount',
      loaderState: 'loaderState'
    }),
  },
  created () {
    this.searchProducts('cat');
  }


}
</script>

<style>
</style>
