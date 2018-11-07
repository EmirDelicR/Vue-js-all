<template>
  <div>
    <h1>Animations</h1>
    <hr />
    <select v-model="alertAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <br />
    <button @click="show = !show">Show alert</button>
    <br /><br />

    <transition :name="alertAnimation">
      <div v-if="show">Info</div>
    </transition>

    <transition name="slide" type="animation">
      <div v-if="show">Info</div>
    </transition>

    <transition appear enter-class="Some class" enter-active-class="Some class" leave-class="Some class" leave-active-class="SOme class">
      <div v-if="show">Info</div>
    </transition>

    <transition :name="alertAnimation" mode="out-in">
      <div v-if="show" key="info">Info</div>
      <div v-else key="warning">Info-else</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'IntroToAnimation',
  data () {
    return {
      show: false,
      alertAnimation: 'fade'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
