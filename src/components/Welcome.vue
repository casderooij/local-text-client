<template>
  <div>
    <div class="welcome-container">
      <div class="logo-container">
        <img src="../assets/img/logo.svg" alt="">
        <p class="logo-container__sub-title">virtual graffiti...</p>
      </div>

      <div class="nearest-text-container">
        <p v-if="!textFound">... looking for text ...</p>

        <p v-if="text">
          <div v-for="t in text">
            <p>{{ t.title }}</p>
            <br>
            <small>{{ Math.floor(t.distance * 1000) }} meters away</small>
          </div>
        </p>
      </div>


      <div v-if="login" class="logoutButton">
        <router-link :to="{name: 'User'}">User</router-link>
      </div>
    </div>

    <div class="bottom-container">
      <div class="routes">
        <router-link :to="{name: 'Register'}" class="routes__button routes__register-button">register</router-link>
        <router-link :to="{name: 'Login'}" class="routes__button routes__login-button">login</router-link>
      </div>
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
      let position;

      let success = (p) => {
        position = p;
        queryPosition(position.coords.latitude, position.coords.longitude);
        console.log(p);

        console.log('test');
        navigator.geolocation.getCurrentPosition(success, error);
      }

      let error = (msg) => {
        console.error(msg);
      }

      let queryPosition = (lat, lon) => {
        axios({
          method: 'get',
          // url: `http://localhost:3000/nearest-texts/${lat}/${lon}`
          url: `https://local-text.nl/server/nearest-texts/${lat}/${lon}`
        })
        .then(response => {
          this.text = response.data;
          this.textFound = true;
        })
        .catch(e => {
          this.errors.push(e)
        })
      }

      navigator.geolocation.getCurrentPosition(success, error);

    } else {
      console.log('Geolocation not available...');
    }
    


    if(localStorage.getItem('token')) {
      var token = JSON.parse(localStorage.getItem('token'));
      axios({
        method: 'get',
        // url: 'http://localhost:3000/users/' + token.userId,
        url: 'https://local-text.nl/server/users/' + token.userId,
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


  }
}
</script>

<style scoped>
.welcome-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
}

.logo-container {
  padding: 2.2rem 0 0 0;
  width: 20rem;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.logo-container__sub-title {
  font-size: 1.2rem;
  align-self: flex-end;
  padding: 0 1.4rem 0 0;
}

.nearest-text-container {
  background-color: lightcoral;
  width: 50vw;
}

.routes {
  width: 100vw;
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  margin: 2.4rem 0;
}

.routes__button {
  background-color: #FF5757;
  margin: 0.6rem;
  padding: 0.6rem 0.9rem;
  text-decoration: none;
  letter-spacing: 0.25rem;
  color: #FFF;
  transition: ease-in-out .2s;
}

.routes__button:hover {
  color: #3B3B3B;
}

.routes__register-button {
  background-color: #FFF;
  color: #FF5757;
}
</style>
