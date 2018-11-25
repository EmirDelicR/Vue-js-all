<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="username" data-username>
            <input type="submit">
        </form>

        <div class="message" v-show="submitted">
            Thank you for your submission, {{ username }}.
        </div>

        <div>
            <button @click="reverseName">Reverse</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "User",

    data () {
        return {
            username: '',
            submitted: false,
            name: 'Emir'
        }
    },

    methods: {
        handleSubmit () {
            this.submitted = true
        },
        reverseName () {
            let reverse = this.name.split('').reverse().join('');
            this.name = reverse;
        },
    }

}
</script>

<style>
</style>
