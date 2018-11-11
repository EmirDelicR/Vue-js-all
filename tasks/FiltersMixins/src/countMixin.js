export const countMixin = {
  computed: {
    countMixin() {
      if (!this.message) return ' (0)'
      this.message = this.message.toString()
      return this.message + ' (' + this.message.length + ')'
    },
  },
}
