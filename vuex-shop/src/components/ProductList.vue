<template>
  <div>
    <h1>Product List</h1>
    <ul v-if="!loading">
      <li v-for="(product, index) in getAvailableProducts" :key="index">
        {{ product.title }} {{ product.price | currency }} {{ product.inventory }}
        <button :disabled="!productIsInStock(product)" @click="addProductToCart(product)">Add</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductList',

  data () {
    return {
      loading: false
    }
  },

  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'
    }),
  },

  computed: {
    ...mapGetters({
      getAvailableProducts: 'availableProducts',
      productIsInStock: 'productIsInStock',
      getCartList: 'cartProducts'
    })
  },
  // call product from server
  created () {
    this.loading = true;
    this.fetchProducts()
      .then(() => this.loading = false)
  },
}
</script>

<style scoped>
</style>
