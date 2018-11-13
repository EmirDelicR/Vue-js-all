<template>
    <div>
        <h2>Secend Childe {{ name }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        }
    },
    created () {
        console.log(this.$route.params)
    },
}
</script>

<style>
</style>
