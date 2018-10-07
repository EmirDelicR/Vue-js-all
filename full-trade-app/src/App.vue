<template>
  <div id="app">
    <div class="container">
      <app-header />
      <div class="row">
        <div class="col-md-12">
          <transition name="slide" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  created () {
    // IMP : Init data for first load
    this.$store.dispatch('initStocks');
  },
}
</script>

<style lang="scss">
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
