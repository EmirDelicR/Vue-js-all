<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Name Reverse: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name with callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    name: 'UserDetail',
    props: {
        myName: {
            type: String,
            required: true
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        reverseName () {
            return this.myName.split("").reverse().join("");
        },
        resetName () {
            this.myName = "Reset Name";
            this.$emit('nameWasReset', this.myName);
        }
    },
    created () {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped lang="scss">
div {
  background-color: rgb(228, 137, 137);
}
</style>
