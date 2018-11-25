<template>
    <div class="vte__cool-card">
        <p data-test="card-div" v-text="'hello I am a card :)'" />
        <p>Current Total:</p>
        <p>{{ currentTotal }}</p>
        <button @click="incrementTotal">Increment</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Card',
    data () {
        return {
            foo: '',
        }
    },
    computed: {
        ...mapGetters('Card', {
            currentTotal: 'currentTotal',
            projectId: 'projectId'
        }),
        getText () {
            return `${this.foo} is Sparta`;
        }
    },
    methods: {
        incrementTotal () {
            this.$store.dispatch('Card/incrementTotal', this.currentTotal + 1);
        },
        addNumbers (num1, num2) {
            return num1 + num2;
        }

    }
};
</script>

<style>
.vte__cool-card {
  height: 20vh;
  width: 40vw;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 1px #000;
}
</style>