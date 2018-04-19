import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Welcome from '@/components/Welcome'
import User from '@/components/User'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Add from '@/components/Add'
import Text from '@/components/Text'
import TextUpdate from '@/components/TextUpdate'
import All from '@/components/All'

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
      component: Add,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/text/:id',
      name: 'Text',
      component: Text
    },
    {
      path: '/text-update/:id',
      name: 'TextUpdate',
      component: TextUpdate
    },
    {
      path: '/all-texts',
      name: 'All',
      component: All,
      meta: {
        requiresAuth: true
      }
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