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

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: '',
          name: 'about',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/First.vue'),
        },
        {
          path: 'second',
          name: 'second',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/Second.vue'),
          props: true,
        },
        {
          path: 'third',
          name: 'third',
          component: () =>
            import(/* webpackChunkName: "first" */ './components/Third.vue'),
          beforeEnter(to, from, next) {
            console.log(to)
            next()
          },
          children: [
            {
              path: ':userId',
              name: 'userDetails',
              component: () =>
                import(/* webpackChunkName: "userDetails" */ './components/user/UserDetails.vue'),
            },
          ],
        },
      ],
    },
  ],
})
