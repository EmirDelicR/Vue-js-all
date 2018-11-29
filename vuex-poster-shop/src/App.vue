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

import storage from '@/utilities/localStorage'
import utilities from '@/utilities/functions'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    ProductList,
    ShoppingCart,
    'app-footer': Footer,
    Search
  },

  created () {
    storage.clear();
    const storageToken = storage.getItem('Token');

    if (storageToken) {
      console.log('The item is is storage: ' + storageToken);
      return
    }
    const token = utilities.createToken(20);
    storage.setItem('Token', token)
  }

}
</script>

<style lang="scss" src="./assets/stylesheets/application.scss">
</style>
