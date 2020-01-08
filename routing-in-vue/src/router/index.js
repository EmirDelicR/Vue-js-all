import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass: 'router-active',
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('savedPosition: ', savedPosition);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        }
        resolve({ x: 0, y: 0 });
      }, 3000);
    });
  }
});

router.beforeEach((to, from, next) => {
  /**
   * make access to store to check authentication
   *
   * const authenticated = store.state.user.authenticated;
   */
  const authenticated = true;

  const isPublic = to.matched.some(record => record.meta.public);

  if (!isPublic && !authenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  }

  next();
});

export default router;
