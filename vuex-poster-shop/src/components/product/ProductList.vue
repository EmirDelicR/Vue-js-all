<template>
  <div class="product-list">
    <!-- Loop throug list and output product -->
    <h3>Choose your product :)</h3>
    <div
      v-for="item in paginatedData"
      :key="item.id"
    >

      <product :product="item" />
    </div>
    <button
      :disabled="productPageNumber === 0"
      @click="previousPage"
    >
      Previous
    </button>
    <button
      :disabled="productPageNumber >= pageCount"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
import Product from './Product'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  methods: {
    ...mapActions({
      nextPage: 'nextProductPage',
      previousPage: 'previousProductPage',
    })
  },
  computed: {
    ...mapGetters({
      productPageNumber: 'productPageNumber',
      pageCount: 'pageCount',
      paginatedData: 'paginatedData'
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
