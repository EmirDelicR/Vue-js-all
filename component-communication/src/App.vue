<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import User from './components/User'

export default {
  name: 'app',
  components: {
    'app-user': User
  }
}
</script>

<style lang="scss">
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
