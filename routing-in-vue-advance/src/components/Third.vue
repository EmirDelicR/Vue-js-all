<template>
    <div>
        Bazinga: {{ this.$route.params.id }}
    </div>
</template>

<script>
export default {
    created () {
        console.log(this.$route.params)
    },
}
</script>

<style>
</style>
