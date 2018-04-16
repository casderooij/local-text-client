<template>
  <div>
    <router-link :to="{name: 'Welcome'}">To Homepage</router-link>
    <br><br>
    <h4>{{ currentUser.username }}</h4>
    <br><br>
    <div class="logoutButton">
        <button v-on:click="doLogout()">logout</button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import authMixin from '../assets/js/mixins/authMixin'
import axios from 'axios'

export default {
  name: 'Login',
  mixins: [authMixin],
  methods: {
    doLogout: function() {
        localStorage.removeItem('token');
        router.push({name: 'Welcome'});
    }
  }
}
</script>

<style>

</style>
