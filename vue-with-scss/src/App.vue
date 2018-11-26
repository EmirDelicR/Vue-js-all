<template>
  <div id="app">
    <Nesting />
    <hr />
    <mixin-component />
    <hr />
    <rest />
  </div>
</template>

<script>
import Nesting from '@/components/Nesting.vue'
import MixinComponent from '@/components/MixinComponent.vue'
import Rest from '@/components/RestScss.vue'
export default {
  name: 'app',
  components: {
    Nesting,
    MixinComponent,
    Rest
  }
}
</script>

<style lang="scss" src="./assets/stylesheets/application.scss">

</style>
