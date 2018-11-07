<template>
    <div @click="displayDetails">
        Server Name: {{ data.name }} <br />
        Server Status: {{ data.status }}
    </div>
</template>

<script>
import { serverCommunicationBus } from '../main.js'

export default {
    name: 'Server',
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
    methods: {
        displayDetails () {
            serverCommunicationBus.$emit('selected', this.data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
