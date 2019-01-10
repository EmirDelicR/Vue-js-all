export default {
  loginUser({ commit }, data) {
    if (
      data.password == process.env.VUE_APP_PASSWORD &&
      data.username == process.env.VUE_APP_USERNAME
    ) {
      commit('setAuthenticated')
    }
  },
  logoutUser({ commit }) {
    commit('setAuthenticated')
  },
}
