<template>
  <div class="nesting">
    <h1>This is Nested component</h1>
    <ul>
      <li>List item 1</li>
      <li class="item">List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
    </ul>
    <div class="test">
      <p>Press meeee <a href="#">(Link) <span>if you can?</span> You can :)</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nesting',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
