import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
        "header-top": Header
      }
    },
    {
      path: "/user",
      //name: "User",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () =>
          import(/* webpackChunkName: "user" */ "./components/user/User.vue"),
        "header-bottom": Header
      },
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "userstart" */ "./components/user/UserStart.vue")
        },
        {
          path: ":id",
          component: () =>
            import(/* webpackChunkName: "userdetails" */ "./components/user/UserDetails.vue"),
          beforeEnter: (to, from, next) => {
            console.log("Inside Guard");
            next();
          }
        },
        {
          path: ":id/edit",
          component: () =>
            import(/* webpackChunkName: "useredit" */ "./components/user/UserEdit.vue"),
          name: "userEdit"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
