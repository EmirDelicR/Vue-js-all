export default {
  getItem(name) {
    return localStorage.getItem(name)
  },

  setItem(name, value) {
    localStorage.setItem(name, value)
  },

  clear() {
    localStorage.clear()
  },
}
