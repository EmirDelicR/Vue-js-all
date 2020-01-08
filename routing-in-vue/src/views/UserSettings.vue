<template>
  <div>
    <h4>User Settings</h4>
    <router-link :to="{ name: 'emails'}">Emails</router-link>|
    <router-link :to="{ name: 'user-data'}">User Data</router-link>
    <transition name="fade">
      <router-view someProp="Some Prop" />
    </transition>
    <router-view name="helper" prop="Some Prop In Helper" />
  </div>
</template>

<script>
export default {
  props: {
    showDefault: Boolean,
    showHelper: Boolean,
    id: String
  },
  mounted() {
    console.log("Show Default: ", this.$props.showDefault);
    console.log("Show Helper: ", this.$props.showHelper);
    console.log("Id: ", this.$props.id);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>