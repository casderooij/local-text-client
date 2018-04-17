<template>
  <div class="login-container">
    <h2 class="login-title">login</h2>
    
    <div v-if="error">
      <p class="login-error">{{ error.message }}</p>
    </div>

    <form v-on:submit.prevent="doLogin" class="login-form">
      <input v-model="username" placeholder="username" type="text" name="username" class="login-input">
      <input v-model="password" placeholder="password" type="password" name="password" class="login-input">
      <button id="login-button" class="login-button">go</button>
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
        url: `https://local-text.nl/server/login`,
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(res => {
        this.error = '';
        localStorage.setItem('token', JSON.stringify(res.data.data.token));
        window.location.replace('https://local-text.nl');
      })
      .catch(err => {
        this.error = '';
        this.error = err.response.data;
      })
    }
  }
}
</script>

<style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  .login-error {
    color: #ff5757;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .login-input {
    border: none;
    border-bottom: 0.2rem #474747 solid;
    padding: 1rem 1rem .4rem 0.4rem;
    margin: 1rem 0 4rem 0;
    font-family: 'Karla', sans-serif;
    font-size: 1.4rem;
    color: #474747;
    outline: none;
  }

  .login-input:first-child {
    margin-bottom: 0;
  }

  input:focus {
    outline: none;
  }

  .login-button {
    background-color: white;
    border: none;
    font-family: 'Karla', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff5757;
    outline: none;
  }
</style>
