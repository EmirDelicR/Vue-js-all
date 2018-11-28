<template>
  <div class="product-list">
    <!-- Loop throug list and output product -->
    <h3>Choose your product :)</h3>
    <div
      v-for="item in productItems"
      :key="item.id"
    >
      <product :product="item" />
    </div>
  </div>
</template>

<script>
import Product from './Product'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    Product,
  },
  computed: {
    ...mapGetters({
      productItems: 'productItems'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
