<template>
  <div id="app">
    <Nesting />
    <hr />
    <mixin-component />
    <hr />
    <rest />
    <hr />
    <grid />
  </div>
</template>

<script>
import Nesting from '@/components/Nesting.vue'
import MixinComponent from '@/components/MixinComponent.vue'
import Rest from '@/components/RestScss.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'app',
  components: {
    Nesting,
    MixinComponent,
    Rest,
    Grid,
    Flex
  },
}
</script>

<style lang="scss" src="./assets/stylesheets/application.scss">
</style>
