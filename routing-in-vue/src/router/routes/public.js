/** Here store all public routes that do not need login */

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    children: [
      {
        // User Profile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        name: 'profile',
        component: () =>
          import(
            /* webpackChunkName: "profile" */ '@/components/User/Profile.vue'
          )
      },
      {
        // User Posts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'post',
        name: 'post',
        component: () =>
          import(/* webpackChunkName: "post" */ '@/components/User/Post.vue')
      }
    ]
  }
];

export default routes.map(route => {
  const meta = {
    public: true
  };
  return { ...route, meta };
});
