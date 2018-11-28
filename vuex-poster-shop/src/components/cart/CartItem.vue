<template>
  <div class="cart-item">
    <div>
      <p>{{ cartItem.title }}</p>
      <p>Price: {{ cartItem.price }}</p>
      <p>Quantity: {{ cartItem.quantity }}</p>
    </div>
    <button @click="removeProductFromCart(cartItem)">Remove</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
    }
  },
  methods: {
    ...mapActions({
      removeProductFromCart: 'removeProductFromCart'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
