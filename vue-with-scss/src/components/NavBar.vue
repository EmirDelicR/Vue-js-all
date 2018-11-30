<template>
  <div class="nav">
    <header>
      <h1>CSS Burger nav bar</h1>
    </header>

    <nav>
      <div class="main-nav">
        <ul class="main-nav-menu">
          <li><a href="#About-Us">Home</a></li>
          <li><a href="#About-Us">About</a></li>
          <li><a href="#Facility">User</a></li>
          <li><a href="#Services">Services</a></li>
          <li class="login"><a href="#Get-Started">Login</a></li>
        </ul>
      </div>
      <div class="burger">
        <input
          type="checkbox"
          id="inp"
        />
        <label for="inp">
          <div class="diagonal part-1"></div>
          <div class="horizontal"></div>
          <div class="diagonal part-2"></div>
        </label>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    check () {
      this.checked = !this.checked;
      console.log(this.checked)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
