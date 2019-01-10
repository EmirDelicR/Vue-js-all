export default {
  isAuthenticated(state) {
    return state.auth
  },
  getUserData(state) {
    return state.data
  },
}
