<template>
    <div class="col-sm-6 col-md-4">
        <b-card border-variant="primary" :header="name" header-bg-variant="primary" header-text-variant="white" align="center">
            <div class="card-text">
                <input :class="{danger: insufficientFunds}" type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                <button class="btn btn-success btn-block" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">
                    {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
                </button>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Stock',
    data () {
        return {
            quantity: 0,
        }
    },
    props: ['stock'],
    methods: {
        buyStock () {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            // Setting action only in stock store is to show
            // using functions from diferent stores
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    },
    computed: {
        funds () {
            return this.$store.getters.funds;
        },
        insufficientFunds () {
            return this.quantity * this.stock.price > this.funds;
        },
        name () {
            return this.stock.name + ' (Price: ' + this.stock.price + ')'
        }
    }
}
</script>

<style scoped lang="scss">
.danger {
  border: 1px solid red;
}
</style>
