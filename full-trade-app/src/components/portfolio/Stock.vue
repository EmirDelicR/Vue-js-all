<template>
    <div class="col-sm-6 col-md-4">
        <b-card border-variant="success" :header="name" header-bg-variant="primary" header-text-variant="white" align="center">
            <div class="card-text">
                <input :class="{danger: insufficientQuantity}" type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                <button class="btn btn-success btn-block" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">
                    {{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}
                </button>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Stock',
    data () {
        return {
            quantity: 0,
        }
    },
    props: ['stock'],
    methods: {
        ...mapActions({
            sellOrder: 'sellStock'
        }),
        sellStock () {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellOrder(order);
            this.quantity = 0;
        }
    },
    computed: {
        funds () {
            return this.$store.getters.funds;
        },
        insufficientQuantity () {
            return this.quantity > this.stock.quantity;
        },
        name () {
            return this.stock.name + ' (Price: ' + this.stock.price + '| Quantity: ' + this.stock.quantity + ' )'

        }
    }
}
</script>

<style scoped lang="scss">
.danger {
  border: 1px solid red;
}
</style>
