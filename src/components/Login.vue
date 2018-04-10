<template>
  <div>
      <a href="/#/">To Homepage</a>
      <br><br>
      <!-- <form v-show="!loggedIn"> -->
        <input v-model="username" type="text" name="username">
        <input v-model="password" type="password" name="password">
        <button id="login-button" v-on:click="doLogin()">LOGIN</button>
      <!-- </form> -->

      <!-- <div v-if="currentUser">
        <p>Welcome {{ currentUser.username }}! You're already logged in..</p><br>
        <button v-on:click="doLogout()">Click here to logout</button>
      </div> -->
  </div>
</template>

<script>
import authMixin from '../assets/js/mixins/authMixin'
import axios from 'axios'

export default {
    name: 'Login',
    mixins: [authMixin],
    data() {
      return {
        username: '',
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
            username: this.$data.username,
            password: this.$data.password
          }
        })
        .then(res => {
          this.$data.msg = res.data
          localStorage.setItem('token', JSON.stringify(res.data.data.token))
        })
        .catch(err => {
          console.log(err);
          this.$data.errors.push(err.message)
        })
      },
      doLogout: function() {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.currentUser = '';
    }
  }
}
</script>

<style>

</style>
