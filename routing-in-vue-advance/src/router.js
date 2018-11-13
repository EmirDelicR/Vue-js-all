import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: 'first',
          name: 'first',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/First.vue'),
        },
        {
          path: ':name',
          name: 'second',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/Second.vue'),
          props: true,
        },
        {
          path: 'third/:id',
          name: 'third',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/Third.vue'),
          beforeEnter(to, from, next) {
            console.log(to)
            console.log(from)
            console.log(`Hello ${to.params.name}`)
            next()
          },
        },
      ],
    },
  ],
})
