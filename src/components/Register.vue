<template>
  <!-- <div>
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
  </div> -->
  <div class="register-container">
    <h2 class="register-title">register new user</h2>
    
    <div v-if="error">
      <p class="register-error">{{ error.message }}</p>
    </div>

    <form v-on:submit.prevent="doLogin" class="register-form">
      <input v-model="username" placeholder="username" type="text" name="username" class="register-input">
      <input v-model="password" placeholder="password" type="password" name="password" class="register-input">
      <button id="register-button" class="register-button">register {{ username }}</button>
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
        url: `https://local-text.nl/server/register`,
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(res => {

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
          localStorage.setItem('token', JSON.stringify(res.data.data.token))
          window.location.replace('https://local-text.nl');
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

<style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  .register-error {
    color: #ff5757;
  }

  .register-form {
    display: flex;
    flex-direction: column;
  }

  .register-input {
    border: none;
    border-bottom: 0.2rem #000 solid;
    padding: 1rem 1rem .4rem 0.4rem;
    margin: 1rem 0 4rem 0;
    font-family: 'Karla', sans-serif;
    font-size: 1.4rem;
  }

  .register-input:first-child {
    margin-bottom: 0;
  }

  input:focus {
    outline: none;
  }

  .register-button {
    background-color: white;
    border: none;
    font-family: 'Karla', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff5757;
    outline: none;
  }
</style>
