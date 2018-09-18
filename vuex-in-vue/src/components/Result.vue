<template>
    <div>
        <p>Counter is {{ counter }}</p>
        <p>Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';

export default {
    name: 'Counter',
    computed: {
        ...mapGetters({
            counter: [types.DOUBLE_COUNTER],
            clicks: 'stringCounter'
        }),
        ourOwnProperty () {

        }
    }
}
</script>

<style scoped>
</style>