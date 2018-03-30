<template>
  <div>
      <a href="/#/">To Homepage</a>
      <br><br>
      {{ msg }}
      <input v-model="login" type="text" name="login">
      <input v-model="password" type="text" name="password">
      <button id="login-button" v-on:click="doLogin()">LOGIN</button>

      _________ <br>
      <br>

      <button v-on:click="doLogout()">LOGOUT!!</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            login: '',
            password: '',
            errors: []
        }
    },
    methods: {
    doLogin: function() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          login: this.$data.login,
          password: this.$data.password
        }
      })
      .then(res => {
        this.$data.msg = res.data
        localStorage.setItem('token', res.data.data.token)
      })
      .catch(err => {
        this.$data.errors.push(err)
      })
    },

    doLogout: function() {
        localStorage.removeItem('token')
    }
  }
}
</script>

<style>

</style>
