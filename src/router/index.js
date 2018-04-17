import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Welcome from '@/components/Welcome'
import User from '@/components/User'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Add from '@/components/Add'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add-text',
      name: 'Add',
      component: Add
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