<template>
  <div>
      <a href="/">To Homepage</a>
      <br><br>
      <h4>Login</h4>
      <br><br>
      <div v-if="error">
        <p>{{ error.message }}</p>
      </div>

      <form v-on:submit.prevent="doLogin">
        <input v-model="username" type="text" name="username">
        <input v-model="password" type="password" name="password">
        <button id="login-button">login</button>
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
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    doLogin: function() {
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
        this.error = '';
        localStorage.setItem('token', JSON.stringify(res.data.data.token))
        router.push({name:'Welcome'});
      })
      .catch(err => {
        this.error = '';
        this.error = err.response.data;
      })
    }
  }
}
</script>

<style>

</style>
