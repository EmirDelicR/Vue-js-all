<template>
  <div
    id="app"
    class="root-app"
  >
    <app-header />
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

export default {
  name: 'app',
  components: {
    'app-header': Header,
    ProductList,
    ShoppingCart,
    'app-footer': Footer
  },
  created () {
    console.log(process.env.VUE_APP_CLIENT_ID)
  }

}
</script>

<style lang="scss" src="./assets/stylesheets/application.scss">
</style>
