<template>
  <div class="flex">
    <header>
      <h1>CSS Flex</h1>
    </header>
    <div class="wrapper">
      <div class="home">Home</div>
      <div class="search">Search</div>
      <div class="about">About</div>
      <div class="logout">Logout</div>
    </div>

    <nav>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li class="search">
          <input
            type="text"
            class="search-input"
            placeholder="Search"
          >
        </li>
        <li class="logout">Logout</li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Flex',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
