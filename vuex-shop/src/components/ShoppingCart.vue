<template>
    <div>
        <h1>Shoping Cart</h1>
        <ul>
            <li v-for="(item, index) in getCartList" :key="index">{{ item.name }} {{ item.quantity }}</li>
        </ul>
        <p>Total: {{ getTotal | currency }}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="getCheckoutStatus">{{ getCheckoutStatus }}</p>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
    name: 'ShoppingCart',
    computed: {
        ...mapGetters({
            getCartList: 'cartProducts',
            getTotal: 'getCartTotal'
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

<style>
</style>
