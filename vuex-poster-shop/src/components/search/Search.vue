<template>
  <div class="search">
    <form
      id="search-form"
      @submit.prevent="searchProducts(searchValue)"
    >
      <input
        class="search"
        type="text"
        v-model="searchValue"
        placeholder="Search..."
      >
      <button
        class="submit"
        type="submit"
      >Search</button>
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
        <span>{{ searchValue ? searchValue : 'cat' }}</span>
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
    const data = this.searchProducts('cat');
    // console.log(data)
  }


}
</script>

<style>
</style>
