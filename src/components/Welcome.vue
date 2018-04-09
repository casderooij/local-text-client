<template>
  <div class="hello">
    <p>virtual graffiti...</p>

    <!-- {{ text.latitude }}, {{ text.longitude }} -->

    <div v-if="!login" class="loginAndRegisterButtons">
      <a href="/#/login">login</a>
      <a href="/#/">register</a>
    </div>

    <div v-if="login" class="logoutButton">
      <button v-on:click="doLogout()">LOGOUT!!</button>
    </div>

    <br><br>

    <!-- {{ d }} -->

  </div>
</template>

<script>
import axios from 'axios'
import calculateDistanceOfText from '../assets/js/methods/calculateDistanceOfText'

export default {
  name: 'Welcome',
  data () {
    return {
      text: '',
      errors: [],
      d: '',
      user: '',
      login: false
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/texts'
    })
    .then(response => {
      this.text = response.data[1]
      // this.d = calculateDistanceOfText(response.data[1].latitude, response.data[1].longitude);
      // calculateDistanceOfText(response.data[1].latitude, response.data[1].longitude);
    })
    .catch(e => {
      this.errors.push(e)
    })


    if(localStorage.getItem('token')) {
      var token = JSON.parse(localStorage.getItem('token'));
      axios({
        method: 'get',
        url: 'http://localhost:3000/users/' + token.userId,
        headers: {'token': token.userToken}
      })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      })

      if(localStorage.getItem('token')) {
        this.login = true;
      }
    }
  },
  methods: {
    doLogout: function() {
      localStorage.removeItem('token');
      this.login = false;
      this.user = '';
    }
  }
}
</script>

<style scoped>

li {
  list-style: none;
}

</style>
