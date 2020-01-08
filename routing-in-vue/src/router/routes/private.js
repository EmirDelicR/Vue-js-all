const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/about-data',
    name: 'about-data',
    component: () =>
      import(/* webpackChunkName: "about-data" */ '@/components/Data/Data.vue')
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () =>
      import(/* webpackChunkName: "navigation" */ '@/views/Navigation.vue'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter from router TO: ', to);
      console.log('beforeEnter from router FROM: ', from);
      next();
    }
  },
  {
    path: '/settings',
    name: 'user-settings',
    // You could also have named views at the top
    component: () =>
      import(/* webpackChunkName: "data" */ '@/views/UserSettings.vue'),
    children: [
      {
        path: 'emails',
        name: 'emails',
        component: () =>
          import(/* webpackChunkName: "emails" */ '@/components/User/Email.vue')
      },
      {
        path: 'user-data',
        name: 'user-data',
        components: {
          default: () =>
            import(
              /* webpackChunkName: "user-data" */ '@/components/User/Name.vue'
            ),
          helper: () =>
            import(
              /* webpackChunkName: "user-data" */ '@/components/User/Helper.vue'
            )
        },
        props: { default: true, helper: true }
      }
    ],
    props: { showDefault: true, showHelper: false, id: 'Some id' }
  }
];

export default routes.map(route => {
  return { ...route, meta: { public: false } };
});
