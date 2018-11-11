<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="template = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="template = 'appGreen'" class="btn btn-success">Load Green Template</button>
        <button @click="template = 'appRed'" class="btn btn-danger">Load Red Template</button>
        <hr>
        <component :is="template">
          This is test!
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  name: 'app',
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data () {
    return {
      template: 'appBlue'
    }
  }
}
</script>

<style>
</style>
