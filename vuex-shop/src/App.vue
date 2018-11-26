<template>
  <div id="app">
    <product-list />
    <hr />
    <shopping-cart />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
</style>
