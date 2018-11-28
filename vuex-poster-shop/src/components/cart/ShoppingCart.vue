<template>
  <div class="cart">
    <h3>Shopping Cart</h3>
    <div
      v-for="item in cartItems"
      :key="item.id"
    >
      <cart-item :cartItem="item" />
    </div>
    <p>Total: {{ cartTotal }}</p>
    <button>Checkout</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItem from './CartItem'
export default {
  name: 'ShoppingCart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotal: 'cartTotal'
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
