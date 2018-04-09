import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Welcome from '@/components/Welcome'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// Check if there is a user token saved on computer, if not: redirect to login page
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!localStorage.getItem('token')) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;