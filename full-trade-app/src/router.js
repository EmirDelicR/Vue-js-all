import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      // route level code-splitting
      // this generates a separate chunk (portfolio.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./components/portfolio/Portfolio.vue")
    },
    {
      path: "/stocks",
      name: "stocks",
      // route level code-splitting
      // this generates a separate chunk (stocks.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "stocks" */ "./components/stocks/Stocks.vue")
    }
  ]
});
