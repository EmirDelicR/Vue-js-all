<template>
  <div class="about">
    <h1>This is an about page</h1>
    <list :items="['Test 1', 'Test 2']" />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'

export default {
  name: 'about',
  components: {
    List
  }
}
</script>