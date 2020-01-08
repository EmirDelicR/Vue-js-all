## Router in Vue

[Vue Router](https://router.vuejs.org/guide/#html)

### Check router and route

```js
mounted() {
    console.log("This is full router: ", this.$router);
    console.log("This is current route: ", this.$route);
}
```

### Check if rout is entered or updated

**_Look User.vue file_**

```js
watch: {
    $route(to, from) {
      // react to route changes...
      console.log("Watch TO: ", to);
      console.log("Watch FROM: ", from);
    }
},
beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter TO: ", to);
    console.log("beforeRouteEnter FROM: ", from);

    next();
},
beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate TO: ", to);
    console.log("beforeRouteUpdate FROM: ", from);

    next();
}
```

### Adding child to router

```js
// in router.js
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

```

// in Component that is rendering children

```html
<template>
  <div>
    <p>{{ $route.params.id }}</p>
    <router-link :to="{ name: 'profile'}">Profile</router-link>|
    <router-link :to="{ name: 'post'}">Post</router-link>
    <router-view></router-view>
  </div>
</template>
```

### Programmatic Navigation

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="switchRoute($event, 'about-data')">Switch Route</button>
  </div>
</template>
```

```js
export default {
  methods: {
    switchRoute(event, routeName) {
      console.log('Function Event: ', event);
      console.log('Function param: ', routeName);

      this.$router.push({ name: routeName, params: { userId: '123' } });
      // this.$router.push({ path: `/user/${userId}` })
    }
  }
};
```

In router

```js
{
    path: '/about-data',
    name: 'about-data',
    component: () =>
      import(/* webpackChunkName: "data" */ '@/components/Data/Data.vue')
}
```

In Data.vue

```js
export default {
  name: 'about-data',
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter TO: ', to);
    console.log('beforeRouteEnter FROM: ', from);
    console.log('beforeRouteEnter TO.param: ', to.params);

    next();
  }
};
```

**_Check [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html)_**

```js
router.go(n)
router.push(location, onComplete?, onAbort?)
router.replace(location, onComplete?, onAbort?)
```

### Named Views

In router

```js
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
        }
      }
    ]
  }

```

In component

```html
<div>
  <h4>User Settings</h4>
  <router-link :to="{ name: 'emails'}">Emails</router-link>|
  <router-link :to="{ name: 'user-data'}">User Data</router-link>
  <router-view />
  <router-view name="helper" />
</div>
```

### Passing Props

In router

```js
{
    path: '/settings',
    name: 'user-settings',
    // You could also have named views at the top
    component: () =>
      import(/* webpackChunkName: "data" */ '@/views/UserSettings.vue'),
    props: { showDefault: true, showHelper: false, id: 'Some id' }
}
```

In component

```js
export default {
  props: {
    showDefault: Boolean,
    showHelper: Boolean,
    id: String
  },
  mounted() {
    console.log('Show Default: ', this.$props.showDefault);
    console.log('Show Helper: ', this.$props.showHelper);
    console.log('Show Helper: ', this.$props.id);
  }
};
```

**_Passing props directly from view_**

In router

```html
<router-view someProp="Some Prop" />
```

### Navigation guards

in router

```js
beforeEnter: (to, from, next) => {
  console.log('beforeEnter from router TO: ', to);
  console.log('beforeEnter from router FROM: ', from);
  next();
};
```

In component

```js
export default {
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('Before Enter this route....', to);
    next(vm => {
      console.log('This is vue instance: ', vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log('Before Update this route....');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('Before Leave this route....');
    const answer = window.confirm(
      'Do you really want to leave? you have unsaved changes!'
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
```

### Fetch data from server

[Fetch](https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation)

### Scroll Behavior

[Disable](https://forum.vuejs.org/t/disable-scroll-behavior-for-a-specific-route/45093/2)

[Control](https://vueschool.io/lessons/how-to-control-the-scroll-behavior-of-vue-router)
