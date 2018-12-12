<template>
  <div class="header">
    <nav>
      <ul>
        <li>{{ currentDate | moment("dddd") }}</li>
        <li>List of times</li>
        <li>List of times</li>
        <li>List of times</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MovieHeader',
  computed: {
    ...mapGetters({
      currentDate: 'getCurrentDay',
    }),
  }
}
</script>

<style>
</style>
