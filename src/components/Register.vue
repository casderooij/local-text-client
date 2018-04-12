<template>
  <div>
      <router-link :to="{name: 'Welcome'}">To Homepage</router-link>
      <br><br>
      <h4>Register</h4>
      <br><br>
      <div v-if="errors.length">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>

      <form v-on:submit.prevent="doLogin">
        <input v-model="username" type="text" name="username">
        <input v-model="password" type="password" name="password">
        <button id="login-button">register new user</button>
      </form>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: '',
      errors: []
    }
  },
  methods: {
    doLogin: function() {
      this.errors = [];
      if(!this.username) {
        this.errors.push('Username is required.');
      }
      if(!this.password) {
        this.errors.push('Password is required.');
        return;
      }

      axios({
        method: 'post',
        // url: `http://localhost:3000/register`,
        url: `http://199.247.11.116/server/register`,
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(res => {

        axios({
          method: 'post',
          // url: `http://localhost:3000/login`,
          url: `http://199.247.11.116/server/login`,
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(res => {
          localStorage.setItem('token', JSON.stringify(res.data.data.token))
          router.push({name:'Welcome'});
        })
        .catch(err => {

        })

      })
      .catch(err => {
      })
    }
  }
}
</script>

<style>

</style>
