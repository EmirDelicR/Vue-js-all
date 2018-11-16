<template>
    <div>
        Bazinga: {{ this.$route.params.id }}
        <h1>User List</h1>
        <user-list :users="users" />
        <router-view />
    </div>
</template>

<script>
import UserList from './user/UserList'
import UserDetails from './user/UserDetails'
import { API } from '../utils/api.js';
export default {
    components: {
        UserList
    },
    data () {
        return {
            users: []
        }
    },
    beforeRouteEnter (to, from, next) {
        API.get(`users`)
            .then(response => {
                console.log(response.data);
                next(vm => (vm.users = response.data))
            })
            .catch(error => next(error));
    },
    created () {
        console.log(this.$route.params)
    },
}
</script>

<style>
</style>
