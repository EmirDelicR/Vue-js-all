<template>
  <div
    :class="{'filter-checkbox': true, 'active': status }"
    @click="proccesFilter(filter)"
  >
    <span class="checkbox"></span>
    <span class="filter-title">{{ filter }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterCheckbox',
  props: {
    filter: {
      type: String
    },
  },
  data () {
    return {
      status: false,
    }
  },
  methods: {
    ...mapActions({
      setFilters: 'setFilters'
    }),
    proccesFilter (filter) {
      this.status = !this.status
      const obj = {
        'name': filter,
        'status': this.status
      }
      this.setFilters(obj)
    }
  },

}
</script>

<style scoped lang="scss">
</style>
