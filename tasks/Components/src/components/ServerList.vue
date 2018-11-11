<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(value, index) in servers" :key="index">
                <Server :data="value" />
            </li>
        </ul>
    </div>
</template>

<script>
import Server from './Server';
export default {
    name: 'ServerList',
    components: {
        Server
    },
    data () {
        return {
            servers: [
                { id: 1, status: 'Normal', name: 'Server 1' },
                { id: 2, status: 'Criticle', name: 'Server 2' },
                { id: 3, status: 'Normal', name: 'Server 3' },
                { id: 4, status: 'Normal', name: 'Server 4' }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
