<template>
  <div>
    <div class="welcome-container">

      <div class="nearest-text-container">
        <div class="wait-container" v-if="!textFound">
          <img class="wait-svg" src="../assets/img/wait.svg" alt="waiting for texts">
          <div class="wait-text">waiting for location</div>
        </div>

        <div v-if="text">
            <p>{{ text[0].title }}</p>
            <br>
            <small>{{ Math.floor(text[0].distance * 1000) }} meters away</small>
        </div>
      </div>


      <div v-if="login" class="logoutButton">
        <router-link :to="{name: 'User'}">User</router-link>
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
      text: null,
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
}

.bottom-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
}

.nearest-text-container {
  width: 100vw;
}

.wait-container {
  position: absolute;
  width: 100vw;
  padding-top: 10rem;
}

.wait-svg {
  position: relative;
  width: 30vw;
  left: 50%;
  margin-top: -15vw;
  margin-left: -15vw;
  animation:spin 3s ease infinite;
}

.wait-text {
  position: relative;
  text-align: center;
  font-size: 1.2rem;
}

@-moz-keyframes spin { 40% { -moz-transform: rotate(180deg) scale(1.4, 1.4); } }
@-webkit-keyframes spin { 40% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); } }
@keyframes spin { 50% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); transform: rotate(180deg) scale(1.4, 1.4); } }

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
