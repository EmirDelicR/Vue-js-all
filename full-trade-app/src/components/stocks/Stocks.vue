<template>
    <div class="row">
        <app-stock v-for="(item) in items" :key="item.id" :stock="item"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock';
export default {
    name: 'Stocks',
    components: {
        appStock: Stock
    },
    computed: {
        items () {
            // IMP : USE geters to fetch data
            return this.$store.getters.stocks
        }
    },
}
</script>

<style scoped lang="scss">
</style>
