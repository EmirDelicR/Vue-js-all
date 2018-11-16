<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            <router-link :to="{ name: 'userDetails', params: { userId: user.id } }">
                {{user.name}}
            </router-link>
        </li>
    </ul>
</template>
<script>

export default {
    props: {
        users: {
            type: Array
        }
    }
};
</script>