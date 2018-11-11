<template>
  <div id="app" class="container">
    <Header />
    <hr>
    <div class="row">
      <server-list />
      <server-details />
    </div>
    <hr>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ServerList from './components/ServerList.vue'
import Footer from './components/Footer.vue'
import ServerDetails from './components/ServerDetails.vue'

export default {
  name: 'app',
  components: {
    Header,
    ServerList,
    Footer,
    ServerDetails
  }
}
</script>

<style>
</style>
