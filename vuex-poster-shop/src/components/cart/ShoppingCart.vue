<template>
  <div class="cart">
    <h3>Shopping Cart</h3>
    <div
      v-for="item in cartItems"
      :key="item.id"
    >
      <cart-item :cartItem="item" />
    </div>
    <div
      v-if="cartItems.length"
      class="total"
    >
      <p>Total: {{ cartTotal | currency }}</p>
      <button @click="checkout">Checkout</button>
    </div>
    <div v-else>
      <p>No item in Shopping cart</p>
    </div>
    <p v-if="getCheckoutStatus">{{ getCheckoutStatus }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
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
    }),
    ...mapState({
      getCheckoutStatus: state => state.ShoppingCart.checkoutStatus
    }),
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    }),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
