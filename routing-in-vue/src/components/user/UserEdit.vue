<template>
    <div>
        <h3>Edit the user</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Number: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="edited = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some Data</p>
    </div>
</template>
<script>
export default {
    name: 'UserEdit',
    data () {
        return {
            edited: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if (this.edited) {
            next();
        } else {
            if (confirm("Are you sure?")) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>
<style scoped>
</style>