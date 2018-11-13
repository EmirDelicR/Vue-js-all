<template>
  <div id="app">
    <websocket-tutorial />
    <hr />
    <axios-tutorial />
  </div>
</template>

<script>
import AxiosTutorial from './components/AxiosTutorial.vue'
import WebsocketTutorial from './components/WebsocketTutorial.vue'

export default {
  name: 'app',
  components: {
    AxiosTutorial,
    WebsocketTutorial
  }
}
</script>

<style></style>
