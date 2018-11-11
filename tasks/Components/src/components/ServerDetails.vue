<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!data">Click on server to se tha data!</p>
        <div v-else>
            <p>Server id: {{data.id}}</p>
            <p>Server name: {{data.name}}</p>
            <p>Server status: {{data.status}}</p>
            <button class="btn btn-primary" @click="updateStatus">Reset Server Status</button>
        </div>
    </div>
</template>

<script>
import { serverCommunicationBus } from '../main.js'
export default {
    name: 'ServerDetails',
    data () {
        return {
            data: null,
        }
    },
    created () {
        serverCommunicationBus.$on('selected', (serverData) => {
            this.data = serverData
        })
    },
    methods: {
        updateStatus () {
            // This can work because object is refrence in memory it is not copy 
            // we only switch pointor 
            this.data.status = 'Normal'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
