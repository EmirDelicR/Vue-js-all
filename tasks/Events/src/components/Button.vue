<template>
    <button @click="clicked">
        {{buttonText}}
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    data () {
        return {
            value: 'This is sparta!'
        }
    },
    props: {
        buttonText: {
            type: String,
            default: () => {
                return "Fancy Button!"
            },
            required: true,
            validator: value => value.length > 3
        }
    },
    methods: {
        clicked () {
            this.$emit('sendDataToPerent', this.value);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: 1px solid black;
  padding: 10px;
}
</style>
