<template>
    <div id="some-id" class="list">
        {{ items }}
        <ul class="list-cl">
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'list',
    props: {
        items: {
            type: Array
        }
    }
}
</script>

<style>
</style>
