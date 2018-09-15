<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    name: "UserEdit",
    props: {
        userAge: {
            type: Number,
            required: true
        }
    },
    methods: {
        editAge () {
            this.userAge = 31;
            //  this.$emit('ageWasEdited', this.userAge);
            eventBus.$emit('ageWasEdited', this.userAge);
        }
    }

}
</script>

<style scoped lang="scss">
div {
  background-color: lightgreen;
}
</style>