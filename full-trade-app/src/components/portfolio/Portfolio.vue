<template>
    <div>
        <app-portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-portfolio-stock>
    </div>
</template>

<script>
import Stock from './Stock';
import { mapGetters } from 'vuex';
export default {
    name: 'Portofolio',
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appPortfolioStock: Stock
    }
}
</script>

<style scoped lang="scss">
</style>
