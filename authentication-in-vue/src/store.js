import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      router.replace("/signin");
    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(
          process.env.VUE_APP_SIGN_IN_UP_URL +
            "/signupNewUser?key=" +
            process.env.VUE_APP_API_KEY,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.replace("/signin");
        })
        .catch(err => console.log(err));
    },
    login({ commit, dispatch }, authData) {
      axios
        .post(
          process.env.VUE_APP_SIGN_IN_UP_URL +
            "/verifyPassword?key=" +
            process.env.VUE_APP_API_KEY,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          router.replace("/dashboard");
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch(err => console.log(err));
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token: token,
        userId: userId
      });
      router.replace("/dashboard");
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.clear();
      // localStorage.removeItem('token');
      router.replace("/signin");
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      axios
        .post(
          process.env.VUE_APP_DATA_BASE_URL +
            "users.json?auth=" +
            state.idToken,
          userData
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      axios
        .get(
          process.env.VUE_APP_DATA_BASE_URL + "users.json?auth=" + state.idToken
        )
        .then(res => {
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          commit("storeUser", users[0]);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuth(state) {
      return state.idToken !== null;
    }
  }
});
