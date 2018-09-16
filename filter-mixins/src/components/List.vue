<template>
    <div>
        <h1>Mixins</h1>
        <hr/>
        <input v-model="filterText">
        <ul>
            <li v-for="(item, index) in filteredFruits" :key="index">{{ item }}</li>
        </ul>
    </div>

</template>

<script>
import { fruitMixin } from '../fruitMixin.js'

export default {
    name: 'List',
    mixins: [fruitMixin],
    created () {
        console.log("List component")
    }
}
</script>

<style>
</style>
