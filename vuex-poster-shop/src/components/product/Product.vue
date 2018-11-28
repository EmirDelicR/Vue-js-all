<template>
  <div class="product">
    <div>
      <p>{{ product.title }}</p>
      <p>Price: {{ product.price | currency }}</p>
      <p>In stock: {{ product.inventory }}</p>
    </div>
    <button
      :disabled="!productIsInStock(product)"
      @click="addProductToCart(product)"
    >Add</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
    }
  },
  computed: {
    ...mapGetters({
      productIsInStock: 'productIsInStock'
    })
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
