<template>
  <div id="app">
    <div class="main-nav">
      <span>&#x25B6; Cinema</span>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" src="./assets/stylesheets/application.scss">
