<template>
  <div class="hello">
    <p>virtual graffiti...</p>

    <p v-if="!textFound">... looking for text ...</p>

    <p v-if="text">
      {{ text[0].title }}
      <br>
      <small>{{ Math.floor(text[0].distance * 1000) }} meters away</small>
    </p>

    <div v-if="!login" class="loginAndRegisterButtons">
      <router-link :to="{name: 'Login'}">login</router-link>
      <router-link :to="{name: 'Register'}">register</router-link>
    </div>

    <div v-if="login" class="logoutButton">
      <router-link :to="{name: 'User'}">User</router-link>
    </div>

  </div>
</template>

<script>
import authMixin from '../assets/js/mixins/authMixin'
import axios from 'axios'

export default {
  name: 'Welcome',
  mixins: [authMixin],
  data () {
    return {
      text: '',
      textFound: false,
      errors: [],
      user: '',
      login: false
    }
  },
  created() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        axios({
          method: 'get',
          url: `http://localhost:3000/nearest-texts/${lat}/${lon}`
        })
        .then(response => {
          this.text = response.data;
          this.textFound = true;
        })
        .catch(e => {
          this.errors.push(e)
        })
      });

      
    } else {
      console.log('Geolocation not available...');
    }
    


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
    
  }
}
</script>

<style scoped>

li {
  list-style: none;
}

</style>
