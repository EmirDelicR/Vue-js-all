<template>
  <div
    id="app"
    class="root-app"
  >
    <app-header />
    <search />
    <product-list />
    <shopping-cart />
    <app-footer />
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'
import ShoppingCart from '@/components/cart/ShoppingCart.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/search/Search.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    ProductList,
    ShoppingCart,
    'app-footer': Footer,
    Search
  },
}
</script>

<style lang="scss" src="./assets/stylesheets/application.scss">
</style>
