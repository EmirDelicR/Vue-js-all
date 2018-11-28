<template>
  <div class="product">
    <div>
      <p>{{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <p>In stock: {{ product.inventory }}</p>
    </div>
    <button @click="addProductToCart(product)">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
    }
  },
  methods: {
    ...mapActions({
      addProductToCart: 'addProductToCart'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
